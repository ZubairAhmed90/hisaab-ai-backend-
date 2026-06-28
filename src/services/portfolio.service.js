const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const HoldingModel = require('../models/holding.model');
const TradeModel = require('../models/trade.model');
const MarketModel = require('../models/market.model');
const { CATALOG_BY_TICKER } = require('../catalog/stock.catalog');
const { FALLBACK_PRICES, DEMO_TRANSACTIONS, daysAgoDate } = require('../helpers/portfolio.helpers');
const { getStockPrice } = require('./market.service');
const { createTxnWithSnapshots, readBalances } = require('../helpers/transaction.helpers');

const seedDemoData = async (userId) => {
  const count = await TransactionModel.countByUser(userId);
  if (count === 0) {
    for (const t of DEMO_TRANSACTIONS) {
      await TransactionModel.createDirect({
        user_id: userId,
        amount: t.amount,
        description: t.description,
        category: t.category,
        transaction_date: daysAgoDate(t.daysAgo),
        source: 'seed',
      });
    }
  }
};

const getWallet = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return {
    wallet_balance: Number(user.wallet_balance),
    account_balance: Number(user.account_balance),
    account_number: user.account_number,
    user_id: user.id,
  };
};

const getPortfolio = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }

  const [holdings, prices] = await Promise.all([
    HoldingModel.findByUser(userId),
    MarketModel.findByType('stock'),
  ]);

  const priceMap = Object.fromEntries(prices.map((p) => [p.ticker, Number(p.price_pkr)]));
  const change1dMap = Object.fromEntries(prices.map((p) => [p.ticker, Number(p.change_1d || 0)]));

  const items = holdings.map((h) => {
    const qty = Number(h.quantity);
    const avgCost = Number(h.avg_cost_pkr);
    const price = priceMap[h.ticker] ?? FALLBACK_PRICES[h.ticker] ?? avgCost;
    const costBasis = qty * avgCost;
    const currentValue = qty * price;
    const returnPct = costBasis > 0 ? ((currentValue - costBasis) / costBasis) * 100 : 0;
    return {
      id: h.id, ticker: h.ticker, display_name: h.display_name,
      quantity: qty, avg_cost_pkr: avgCost, price_pkr: price,
      change_1d: change1dMap[h.ticker] ?? 0,
      cost_basis: Math.round(costBasis),
      current_value: Math.round(currentValue),
      return_pct: Math.round(returnPct * 10) / 10,
      acquired_at: h.acquired_at,
    };
  });

  const totalCost = items.reduce((s, i) => s + i.cost_basis, 0);
  const totalValue = items.reduce((s, i) => s + i.current_value, 0);
  const totalReturnPct = totalCost > 0 ? Math.round(((totalValue - totalCost) / totalCost) * 1000) / 10 : 0;

  return {
    wallet_balance: Number(user.wallet_balance),
    account_balance: Number(user.account_balance),
    account_number: user.account_number,
    holdings: items,
    summary: { total_invested: totalCost, total_value: totalValue, total_return_pct: totalReturnPct, count: items.length },
  };
};

const buyStock = async (userId, ticker, quantity) => {
  const upper = ticker.toUpperCase();
  const meta = CATALOG_BY_TICKER[upper];
  if (!meta) {
    const err = new Error(`Unknown stock: ${ticker}`);
    err.status = 400;
    throw err;
  }
  if (!quantity || quantity <= 0) {
    const err = new Error('Quantity must be positive');
    err.status = 400;
    throw err;
  }

  const price = await getStockPrice(upper);
  const total = Math.round(price * quantity * 100) / 100;

  await transaction(async (conn) => {
    const balancesBefore = await readBalances(conn, userId);
    const balance = balancesBefore.wallet;
    if (balance < total) {
      const err = new Error(`Insufficient investment wallet balance. Move funds from account to wallet first. Need Rs ${total}, have Rs ${balance}`);
      err.status = 400;
      throw err;
    }

    await UserModel.decrementWallet(conn, userId, total);
    const balancesAfterWallet = await readBalances(conn, userId);

    const existing = await HoldingModel.findByUserAndTickerTx(conn, userId, upper);
    if (existing) {
      const oldQty = Number(existing.quantity);
      const oldAvg = Number(existing.avg_cost_pkr);
      const newQty = oldQty + quantity;
      const newAvg = (oldQty * oldAvg + quantity * price) / newQty;
      await HoldingModel.updateQuantityAndAvg(conn, existing.id, newQty, Math.round(newAvg * 100) / 100);
    } else {
      await HoldingModel.create(conn, { user_id: userId, ticker: upper, display_name: meta.display_name, quantity, avg_cost_pkr: price });
    }

    await TradeModel.create(conn, {
      user_id: userId,
      ticker: upper,
      display_name: meta.display_name,
      side: 'buy',
      quantity,
      price_pkr: price,
      total_pkr: total,
      wallet_balance_before: balancesBefore.wallet,
      wallet_balance_after: balancesAfterWallet.wallet,
    });
    await createTxnWithSnapshots(conn, userId, {
      amount: -total,
      description: `Bought ${quantity} ${upper} @ Rs ${price}`,
      category: 'invest',
      transaction_date: new Date(),
      source: 'stock_buy',
      merchant: upper,
    }, balancesBefore);
  });

  return getPortfolio(userId);
};

const sellStock = async (userId, ticker, quantity) => {
  const upper = ticker.toUpperCase();
  const meta = CATALOG_BY_TICKER[upper];
  if (!meta) {
    const err = new Error(`Unknown stock: ${ticker}`);
    err.status = 400;
    throw err;
  }
  if (!quantity || quantity <= 0) {
    const err = new Error('Quantity must be positive');
    err.status = 400;
    throw err;
  }

  const price = await getStockPrice(upper);
  const total = Math.round(price * quantity * 100) / 100;

  await transaction(async (conn) => {
    const balancesBefore = await readBalances(conn, userId);
    const holding = await HoldingModel.findByUserAndTickerTx(conn, userId, upper);
    if (!holding) {
      const err = new Error(`You don't own ${upper}`);
      err.status = 400;
      throw err;
    }
    const owned = Number(holding.quantity);
    if (owned < quantity) {
      const err = new Error(`Only ${owned} shares available to sell`);
      err.status = 400;
      throw err;
    }

    await UserModel.incrementWallet(conn, userId, total);
    const balancesAfterWallet = await readBalances(conn, userId);

    const remaining = owned - quantity;
    if (remaining <= 0.0001) {
      await HoldingModel.delete(conn, holding.id);
    } else {
      await HoldingModel.updateQuantity(conn, holding.id, remaining);
    }

    await TradeModel.create(conn, {
      user_id: userId,
      ticker: upper,
      display_name: meta.display_name,
      side: 'sell',
      quantity,
      price_pkr: price,
      total_pkr: total,
      wallet_balance_before: balancesBefore.wallet,
      wallet_balance_after: balancesAfterWallet.wallet,
    });
    await createTxnWithSnapshots(conn, userId, {
      amount: total,
      description: `Sold ${quantity} ${upper} @ Rs ${price}`,
      category: 'invest',
      transaction_date: new Date(),
      source: 'stock_sell',
      merchant: upper,
    }, balancesBefore);
  });

  return getPortfolio(userId);
};

const getTrades = async (userId, { limit = 20, ticker, days } = {}) => {
  if (ticker) {
    return TradeModel.findByUserAndTicker(userId, ticker, { limit, days: days || 7 });
  }
  return TradeModel.findByUser(userId, limit);
};

const transferBalance = async (userId, amount, direction) => {
  if (!amount || amount <= 0) {
    const err = new Error('Amount must be greater than zero');
    err.status = 400;
    throw err;
  }

  return transaction(async (conn) => {
    const [[userRow]] = await conn.execute('SELECT account_number FROM users WHERE id = ?', [userId]);
    if (!userRow) {
      const err = new Error('User not found');
      err.status = 404;
      throw err;
    }
    const balancesBefore = await readBalances(conn, userId);
    const wallet = balancesBefore.wallet;
    const account = balancesBefore.account;
    const acctNum = userRow.account_number || '';

    if (direction === 'to_account') {
      if (wallet < amount) {
        const err = new Error(`Insufficient wallet balance. Need Rs ${amount}, have Rs ${wallet}. Wallet is for stock investing only.`);
        err.status = 400;
        throw err;
      }
      await UserModel.transferBalances(conn, userId, -amount, amount);
      await createTxnWithSnapshots(conn, userId, {
        amount: -amount,
        description: `Moved Rs ${amount} from investment wallet to account ${acctNum}`.trim(),
        category: 'transfer',
        transaction_date: new Date(),
        source: 'balance_transfer',
        merchant: 'Internal transfer',
      }, balancesBefore);
    } else {
      if (account < amount) {
        const err = new Error(`Insufficient account balance. Need Rs ${amount}, have Rs ${account}`);
        err.status = 400;
        throw err;
      }
      await UserModel.transferBalances(conn, userId, amount, -amount);
      await createTxnWithSnapshots(conn, userId, {
        amount: -amount,
        description: `Moved Rs ${amount} from account to investment wallet for stocks`,
        category: 'transfer',
        transaction_date: new Date(),
        source: 'balance_transfer',
        merchant: 'Internal transfer',
      }, balancesBefore);
    }

    const after = await readBalances(conn, userId);
    return {
      wallet_balance: after.wallet,
      account_balance: after.account,
      account_number: acctNum,
      account_balance_before: balancesBefore.account,
      account_balance_after: after.account,
      wallet_balance_before: balancesBefore.wallet,
      wallet_balance_after: after.wallet,
      direction,
      amount,
    };
  });
};

module.exports = { seedDemoData, getWallet, getPortfolio, buyStock, sellStock, getTrades, transferBalance };
