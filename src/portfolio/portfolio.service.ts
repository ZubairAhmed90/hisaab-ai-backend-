import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MarketService } from '../market/market.service';
import { CATALOG_BY_TICKER } from '../market/stock.catalog';
import { DEMO_TRANSACTIONS, FALLBACK_PRICES, daysAgoDate } from './portfolio.helpers';

@Injectable()
export class PortfolioService {
  constructor(
    private prisma: PrismaService,
    private marketService: MarketService,
  ) {}

  /** Starter transactions only — users buy stocks themselves */
  async seedDemoData(userId: number) {
    const existing = await this.prisma.transaction.count({ where: { user_id: userId } });
    if (existing === 0) {
      await this.prisma.transaction.createMany({
        data: DEMO_TRANSACTIONS.map((t) => ({
          user_id: userId,
          amount: t.amount,
          description: t.description,
          category: t.category,
          transaction_date: daysAgoDate(t.daysAgo),
          source: 'seed',
        })),
      });
    }
  }

  async getWallet(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return {
      wallet_balance: Number(user.wallet_balance),
      account_balance: Number(user.account_balance),
      account_number: user.account_number,
      user_id: user.id,
    };
  }

  async getPortfolio(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const holdings = await this.prisma.userHolding.findMany({
      where: { user_id: userId },
      orderBy: { ticker: 'asc' },
    });

    const prices = await this.prisma.marketCache.findMany({
      where: { asset_type: 'stock' },
    });
    const priceMap = Object.fromEntries(
      prices.map((p) => [p.ticker, Number(p.price_pkr)]),
    );

    const items = holdings.map((h) => {
      const qty = Number(h.quantity);
      const avgCost = Number(h.avg_cost_pkr);
      const price = priceMap[h.ticker] ?? FALLBACK_PRICES[h.ticker] ?? avgCost;
      const costBasis = qty * avgCost;
      const currentValue = qty * price;
      const returnPct = costBasis > 0 ? ((currentValue - costBasis) / costBasis) * 100 : 0;
      const change1d = prices.find((p) => p.ticker === h.ticker)?.change_1d;

      return {
        id: h.id,
        ticker: h.ticker,
        display_name: h.display_name,
        quantity: qty,
        avg_cost_pkr: avgCost,
        price_pkr: price,
        change_1d: change1d != null ? Number(change1d) : 0,
        cost_basis: Math.round(costBasis),
        current_value: Math.round(currentValue),
        return_pct: Math.round(returnPct * 10) / 10,
        acquired_at: h.acquired_at,
      };
    });

    const totalCost = items.reduce((s, i) => s + i.cost_basis, 0);
    const totalValue = items.reduce((s, i) => s + i.current_value, 0);
    const totalReturnPct =
      totalCost > 0 ? Math.round(((totalValue - totalCost) / totalCost) * 1000) / 10 : 0;

    return {
      wallet_balance: Number(user.wallet_balance),
      account_balance: Number(user.account_balance),
      account_number: user.account_number,
      holdings: items,
      summary: {
        total_invested: totalCost,
        total_value: totalValue,
        total_return_pct: totalReturnPct,
        count: items.length,
      },
    };
  }

  async buyStock(userId: number, ticker: string, quantity: number) {
    const upper = ticker.toUpperCase();
    const meta = CATALOG_BY_TICKER[upper];
    if (!meta) throw new BadRequestException(`Unknown stock: ${ticker}`);
    if (!quantity || quantity <= 0) throw new BadRequestException('Quantity must be positive');

    const price = await this.marketService.getStockPrice(upper);
    const total = Math.round(price * quantity * 100) / 100;

    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (!user) throw new NotFoundException('User not found');

      const balance = Number(user.wallet_balance);
      if (balance < total) {
        throw new BadRequestException(
          `Insufficient wallet balance. Need Rs ${total}, have Rs ${balance}`,
        );
      }

      await tx.user.update({
        where: { id: userId },
        data: { wallet_balance: { decrement: total } },
      });

      const existing = await tx.userHolding.findUnique({
        where: { user_id_ticker: { user_id: userId, ticker: upper } },
      });

      if (existing) {
        const oldQty = Number(existing.quantity);
        const oldAvg = Number(existing.avg_cost_pkr);
        const newQty = oldQty + quantity;
        const newAvg = (oldQty * oldAvg + quantity * price) / newQty;
        await tx.userHolding.update({
          where: { id: existing.id },
          data: { quantity: newQty, avg_cost_pkr: Math.round(newAvg * 100) / 100 },
        });
      } else {
        await tx.userHolding.create({
          data: {
            user_id: userId,
            ticker: upper,
            display_name: meta.display_name,
            quantity,
            avg_cost_pkr: price,
          },
        });
      }

      await tx.stockTrade.create({
        data: {
          user_id: userId,
          ticker: upper,
          display_name: meta.display_name,
          side: 'buy',
          quantity,
          price_pkr: price,
          total_pkr: total,
        },
      });

      await tx.transaction.create({
        data: {
          user_id: userId,
          amount: -total,
          description: `Bought ${quantity} ${upper} @ Rs ${price}`,
          category: 'invest',
          transaction_date: new Date(),
          source: 'stock_buy',
          merchant: upper,
        },
      });

      return { success: true };
    });
    return this.getPortfolio(userId);
  }

  async sellStock(userId: number, ticker: string, quantity: number) {
    const upper = ticker.toUpperCase();
    const meta = CATALOG_BY_TICKER[upper];
    if (!meta) throw new BadRequestException(`Unknown stock: ${ticker}`);
    if (!quantity || quantity <= 0) throw new BadRequestException('Quantity must be positive');

    const price = await this.marketService.getStockPrice(upper);
    const total = Math.round(price * quantity * 100) / 100;

    return this.prisma.$transaction(async (tx) => {
      const holding = await tx.userHolding.findUnique({
        where: { user_id_ticker: { user_id: userId, ticker: upper } },
      });
      if (!holding) throw new BadRequestException(`You don't own ${upper}`);

      const owned = Number(holding.quantity);
      if (owned < quantity) {
        throw new BadRequestException(`Only ${owned} shares available to sell`);
      }

      await tx.user.update({
        where: { id: userId },
        data: { wallet_balance: { increment: total } },
      });

      const remaining = owned - quantity;
      if (remaining <= 0.0001) {
        await tx.userHolding.delete({ where: { id: holding.id } });
      } else {
        await tx.userHolding.update({
          where: { id: holding.id },
          data: { quantity: remaining },
        });
      }

      await tx.stockTrade.create({
        data: {
          user_id: userId,
          ticker: upper,
          display_name: meta.display_name,
          side: 'sell',
          quantity,
          price_pkr: price,
          total_pkr: total,
        },
      });

      await tx.transaction.create({
        data: {
          user_id: userId,
          amount: total,
          description: `Sold ${quantity} ${upper} @ Rs ${price}`,
          category: 'invest',
          transaction_date: new Date(),
          source: 'stock_sell',
          merchant: upper,
        },
      });

      return { success: true };
    });
    return this.getPortfolio(userId);
  }

  async getTrades(userId: number, limit = 20) {
    return this.prisma.stockTrade.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      take: limit,
    });
  }

  /** Move funds between spending wallet and linked bank account */
  async transferBalance(
    userId: number,
    amount: number,
    direction: 'to_account' | 'to_wallet',
  ) {
    if (!amount || amount <= 0) {
      throw new BadRequestException('Amount must be greater than zero');
    }

    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (!user) throw new NotFoundException('User not found');

      const wallet = Number(user.wallet_balance);
      const account = Number(user.account_balance);

      if (direction === 'to_account') {
        if (wallet < amount) {
          throw new BadRequestException(
            `Insufficient wallet balance. Need Rs ${amount}, have Rs ${wallet}`,
          );
        }
        await tx.user.update({
          where: { id: userId },
          data: {
            wallet_balance: { decrement: amount },
            account_balance: { increment: amount },
          },
        });
        await tx.transaction.create({
          data: {
            user_id: userId,
            amount: -amount,
            description: `Moved Rs ${amount} from wallet to account ${user.account_number || ''}`.trim(),
            category: 'transfer',
            transaction_date: new Date(),
            source: 'balance_transfer',
            merchant: 'Internal transfer',
          },
        });
      } else {
        if (account < amount) {
          throw new BadRequestException(
            `Insufficient account balance. Need Rs ${amount}, have Rs ${account}`,
          );
        }
        await tx.user.update({
          where: { id: userId },
          data: {
            account_balance: { decrement: amount },
            wallet_balance: { increment: amount },
          },
        });
        await tx.transaction.create({
          data: {
            user_id: userId,
            amount,
            description: `Moved Rs ${amount} from account to wallet`,
            category: 'transfer',
            transaction_date: new Date(),
            source: 'balance_transfer',
            merchant: 'Internal transfer',
          },
        });
      }

      const updated = await tx.user.findUnique({ where: { id: userId } });
      return {
        wallet_balance: Number(updated!.wallet_balance),
        account_balance: Number(updated!.account_balance),
        account_number: updated!.account_number,
        direction,
        amount,
      };
    });
  }
}
