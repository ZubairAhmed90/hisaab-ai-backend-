const { readBalances } = require('./balance.helpers');
const TransactionModel = require('../models/transaction.model');

async function createTxnWithSnapshots(conn, userId, data, balancesBefore) {
  const after = await readBalances(conn, userId);
  return TransactionModel.create(conn, {
    ...data,
    user_id: userId,
    account_balance_before: balancesBefore.account,
    account_balance_after: after.account,
    wallet_balance_before: balancesBefore.wallet,
    wallet_balance_after: after.wallet,
  });
}

module.exports = { createTxnWithSnapshots, readBalances };
