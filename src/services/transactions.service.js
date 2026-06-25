const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const { categorize } = require('./ai.service');
const { checkLimitBeforeSave } = require('./limits.service');
const { parseCsvBuffer, mapCsvRow, summarizeByCategory, monthDateRange } = require('../helpers/transactions.helpers');

const SKIP_WALLET_SOURCES = ['stock_buy', 'stock_sell', 'admin_credit', 'seed', 'balance_transfer'];

const create = async (userId, dto) => {
  const category = dto.category || (await categorize(dto.description));

  if (category !== 'income') {
    const check = await checkLimitBeforeSave(userId, category, Math.abs(dto.amount));
    if (!check.allowed) {
      const err = new Error(check.message);
      err.status = 400;
      throw err;
    }
  }

  const source = dto.source || 'manual';
  const skipWallet = SKIP_WALLET_SOURCES.includes(source);
  let storedAmount = dto.amount;

  return transaction(async (conn) => {
    if (!skipWallet) {
      const [[user]] = await conn.execute('SELECT wallet_balance FROM users WHERE id = ?', [userId]);
      if (!user) {
        const err = new Error('User not found');
        err.status = 404;
        throw err;
      }
      const balance = Number(user.wallet_balance);
      const absAmount = Math.abs(Number(dto.amount));

      if (category === 'income' && Number(dto.amount) > 0) {
        await UserModel.incrementWallet(conn, userId, absAmount);
        storedAmount = absAmount;
      } else if (category !== 'income' && absAmount > 0) {
        if (balance < absAmount) {
          const err = new Error(`Insufficient wallet balance. Need Rs ${absAmount}, have Rs ${balance}`);
          err.status = 400;
          throw err;
        }
        await UserModel.decrementWallet(conn, userId, absAmount);
        storedAmount = -absAmount;
      }
    } else if (source === 'stock_buy' && Number(dto.amount) > 0) {
      storedAmount = -Math.abs(Number(dto.amount));
    }

    return TransactionModel.create(conn, {
      user_id: userId,
      amount: storedAmount,
      description: dto.description,
      category,
      merchant: dto.merchant || null,
      transaction_date: new Date(dto.date),
      source,
    });
  });
};

const updateCategory = async (userId, id, category) => {
  const txn = await TransactionModel.findOne(id, userId);
  if (!txn) {
    const err = new Error('Transaction not found');
    err.status = 404;
    throw err;
  }
  return TransactionModel.updateCategory(id, category);
};

const list = async (userId, page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  const [items, total] = await Promise.all([
    TransactionModel.findMany(userId, { limit, offset }),
    TransactionModel.count(userId),
  ]);
  return { items, total, page, limit };
};

const summary = async (userId, month) => {
  const { start, end } = monthDateRange(month);
  const transactions = await TransactionModel.findByDateRange(userId, start, end);
  return summarizeByCategory(transactions);
};

const importCsv = async (userId, buffer) => {
  const rows = await parseCsvBuffer(buffer);
  const created = [];
  for (const row of rows) {
    const mapped = mapCsvRow(row);
    const category = await categorize(mapped.description);
    const check = await checkLimitBeforeSave(userId, category, Number(mapped.amount));
    if (!check.allowed) {
      const err = new Error(check.message);
      err.status = 400;
      throw err;
    }
    const txn = await TransactionModel.createDirect({
      user_id: userId,
      amount: mapped.amount,
      description: mapped.description,
      category,
      transaction_date: mapped.transaction_date,
      source: 'csv',
    });
    created.push(txn);
  }
  return { imported: created.length, transactions: created };
};

const remove = async (userId, id) => {
  const txn = await TransactionModel.findOne(id, userId);
  if (!txn) {
    const err = new Error('Transaction not found');
    err.status = 404;
    throw err;
  }
  await TransactionModel.delete(id);
  return { deleted: true };
};

module.exports = { create, updateCategory, list, summary, importCsv, remove };
