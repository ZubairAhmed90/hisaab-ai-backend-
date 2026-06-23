import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AiService } from '../ai/ai.service';
import { LimitsService } from '../limits/limits.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import {
  mapCsvRow,
  monthDateRange,
  parseCsvBuffer,
  summarizeByCategory,
} from './transactions.helpers';

@Injectable()
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private aiService: AiService,
    private limitsService: LimitsService,
  ) {}

  // Create a transaction, update wallet balance, and auto-categorize via AI
  async create(userId: number, dto: CreateTransactionDto) {
    const category =
      dto.category || (await this.aiService.categorize(dto.description));
    if (category !== 'income') {
      const check = await this.limitsService.checkLimitBeforeSave(
        userId,
        category,
        Math.abs(dto.amount),
      );
      if (!check.allowed) throw new BadRequestException(check.message);
    }

    const source = dto.source || 'manual';
    const skipWallet = ['stock_buy', 'stock_sell', 'admin_credit', 'seed', 'balance_transfer'].includes(source);
    let storedAmount = dto.amount;

    return this.prisma.$transaction(async (tx) => {
      if (!skipWallet) {
        const user = await tx.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');
        const balance = Number(user.wallet_balance);
        const absAmount = Math.abs(Number(dto.amount));

        if (category === 'income' && Number(dto.amount) > 0) {
          await tx.user.update({
            where: { id: userId },
            data: { wallet_balance: { increment: absAmount } },
          });
          storedAmount = absAmount;
        } else if (category !== 'income' && absAmount > 0) {
          if (balance < absAmount) {
            throw new BadRequestException(
              `Insufficient wallet balance. Need Rs ${absAmount}, have Rs ${balance}`,
            );
          }
          await tx.user.update({
            where: { id: userId },
            data: { wallet_balance: { decrement: absAmount } },
          });
          storedAmount = -absAmount;
        }
      } else if (source === 'stock_buy' && Number(dto.amount) > 0) {
        storedAmount = -Math.abs(Number(dto.amount));
      }

      return tx.transaction.create({
        data: {
          user_id: userId,
          amount: storedAmount,
          description: dto.description,
          category,
          merchant: dto.merchant,
          transaction_date: new Date(dto.date),
          source,
        },
      });
    });
  }

  // Update only the category field of a transaction
  async updateCategory(userId: number, id: number, category: string) {
    const txn = await this.prisma.transaction.findFirst({
      where: { id, user_id: userId },
    });
    if (!txn) throw new NotFoundException('Transaction not found');
    return this.prisma.transaction.update({
      where: { id },
      data: { category, user_corrected: true },
    });
  }

  // Return paginated transactions for a user
  async list(userId: number, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.prisma.transaction.findMany({
        where: { user_id: userId },
        orderBy: { transaction_date: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.transaction.count({ where: { user_id: userId } }),
    ]);
    return { items, total, page, limit };
  }

  // Return category totals for a given month
  async summary(userId: number, month?: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: { user_id: userId, transaction_date: monthDateRange(month) },
    });
    return summarizeByCategory(transactions);
  }

  // Import transactions from a CSV file buffer
  async importCsv(userId: number, buffer: Buffer) {
    const rows = await parseCsvBuffer(buffer);
    const created = [];
    for (const row of rows) {
      const mapped = mapCsvRow(row);
      const category = await this.aiService.categorize(mapped.description);
      const check = await this.limitsService.checkLimitBeforeSave(
        userId,
        category,
        Number(mapped.amount),
      );
      if (!check.allowed) throw new BadRequestException(check.message);
      const txn = await this.prisma.transaction.create({
        data: { user_id: userId, ...mapped, category, source: 'csv' },
      });
      created.push(txn);
    }
    return { imported: created.length, transactions: created };
  }

  // Delete a transaction owned by the user
  async remove(userId: number, id: number) {
    const txn = await this.prisma.transaction.findFirst({
      where: { id, user_id: userId },
    });
    if (!txn) throw new NotFoundException('Transaction not found');
    await this.prisma.transaction.delete({ where: { id } });
    return { deleted: true };
  }
}
