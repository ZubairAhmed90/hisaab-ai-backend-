const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const { categorize } = require('./ai.service');
const { checkLimitBeforeSave } = require('./limits.service');
const { createTxnWithSnapshots, readBalances } = require('../helpers/transaction.helpers');
const { parseCsvBuffer, mapCsvRow, summarizeByCategory, monthDateRange } = require('../helpers/transactions.helpers');

/** Wallet is only touched by stock buy/sell (portfolio.service). Everything else uses account. */
const SKIP_BALANCE_SOURCES = [
  'stock_buy', 'stock_sell', 'admin_credit', 'seed', 'balance_transfer', 'p2p_send', 'p2p_receive',
];

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
  const skipBalance = SKIP_BALANCE_SOURCES.includes(source);
  let storedAmount = dto.amount;

  return transaction(async (conn) => {
    const balancesBefore = await readBalances(conn, userId);
    if (!skipBalance) {
      const balance = balancesBefore.account;
      const absAmount = Math.abs(Number(dto.amount));

      if (category === 'income' && Number(dto.amount) > 0) {
        await UserModel.incrementAccount(conn, userId, absAmount);
        storedAmount = absAmount;
      } else if (category !== 'income' && absAmount > 0) {
        if (balance < absAmount) {
          const err = new Error(`Insufficient account balance. Need Rs ${absAmount}, have Rs ${balance}`);
          err.status = 400;
          throw err;
        }
        await UserModel.decrementAccount(conn, userId, absAmount);
        storedAmount = -absAmount;
      }
    } else if (source === 'stock_buy' && Number(dto.amount) > 0) {
      storedAmount = -Math.abs(Number(dto.amount));
    }

    return createTxnWithSnapshots(conn, userId, {
      amount: storedAmount,
      description: dto.description,
      category,
      merchant: dto.merchant || null,
      transaction_date: new Date(dto.date),
      source,
    }, balancesBefore);
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

const list = async (userId, page = 1, limit = 20, filters = {}) => {
  const offset = (page - 1) * limit;
  const [items, total] = await Promise.all([
    TransactionModel.findMany(userId, { limit, offset, ...filters }),
    TransactionModel.count(userId, filters),
  ]);
  return { items, total, page, limit };
};

const getOne = async (userId, id) => {
  const txn = await TransactionModel.findOne(id, userId);
  if (!txn) {
    const err = new Error('Transaction not found');
    err.status = 404;
    throw err;
  }
  return txn;
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

module.exports = { create, updateCategory, list, getOne, summary, importCsv, remove };
