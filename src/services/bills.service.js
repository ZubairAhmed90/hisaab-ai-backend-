const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const BillPaymentModel = require('../models/bill-payment.model');
const NotificationModel = require('../models/notification.model');
const { checkLimitBeforeSave } = require('./limits.service');
const { createTxnWithSnapshots, readBalances } = require('../helpers/transaction.helpers');

const payBill = async (userId, dto) => {
  const amount = Number(dto.amount);
  if (!amount || amount <= 0) {
    const err = new Error('Amount must be greater than zero');
    err.status = 400;
    throw err;
  }

  const check = await checkLimitBeforeSave(userId, 'utilities', amount);
  if (!check.allowed) {
    const err = new Error(check.message);
    err.status = 400;
    throw err;
  }

  const user = await UserModel.findById(userId);
  if (Number(user.account_balance) < amount) {
    const err = new Error(`Insufficient account balance. Need Rs ${amount}, have Rs ${user.account_balance}`);
    err.status = 400;
    throw err;
  }

  const billerName = dto.biller_name?.trim() || dto.biller_code;
  const consumerNumber = String(dto.consumer_number).trim();
  const today = new Date();

  return transaction(async (conn) => {
    const balancesBefore = await readBalances(conn, userId);
    await UserModel.decrementAccount(conn, userId, amount);

    const txn = await createTxnWithSnapshots(conn, userId, {
      amount: -amount,
      description: `${billerName} bill — ${consumerNumber}`,
      category: 'utilities',
      merchant: billerName,
      transaction_date: today,
      source: 'bill_pay',
    }, balancesBefore);

    const bill = await BillPaymentModel.create(conn, {
      user_id: userId,
      biller_code: dto.biller_code,
      biller_name: billerName,
      consumer_number: consumerNumber,
      amount,
      transaction_id: txn.id,
    });

    await NotificationModel.create(conn, {
      user_id: userId,
      type: 'bill_paid',
      title: 'Bill paid',
      body: `Rs ${amount.toLocaleString()} paid to ${billerName}`,
      payload: { bill_id: bill.id, biller_name: billerName, consumer_number: consumerNumber, amount },
    });

    const updatedUser = await UserModel.findById(userId);
    return {
      bill,
      transaction: txn,
      account_balance: Number(updatedUser.account_balance),
      wallet_balance: Number(updatedUser.wallet_balance),
      account_balance_before: txn.account_balance_before,
      account_balance_after: txn.account_balance_after,
      wallet_balance_before: txn.wallet_balance_before,
      wallet_balance_after: txn.wallet_balance_after,
    };
  });
};

const history = (userId, limit = 30) => BillPaymentModel.listForUser(userId, limit);

module.exports = { payBill, history };
