const bcrypt = require('bcryptjs');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const { generateUniqueAccountNumber } = require('../helpers/auth.helpers');
const { transaction } = require('../config/db');

const backfillAccountNumbers = async () => {
  const users = await UserModel.findWithoutAccountNumber();
  for (const user of users) {
    const account_number = await generateUniqueAccountNumber();
    await UserModel.update(user.id, { account_number });
  }
};

const ensureAdminUser = async () => {
  const email = process.env.ADMIN_EMAIL || 'admin@hisaab.ai';
  const password = process.env.ADMIN_PASSWORD || 'admin123';

  let user = await UserModel.findByEmail(email);
  if (!user) {
    const account_number = await generateUniqueAccountNumber();
    await UserModel.createAdmin({
      name: 'Admin',
      email,
      password_hash: await bcrypt.hash(password, 10),
      account_number,
    });
    return;
  }
  if (!user.is_admin) {
    await UserModel.update(user.id, { is_admin: true });
  }
  if (!user.account_number) {
    const account_number = await generateUniqueAccountNumber();
    await UserModel.update(user.id, { account_number });
  }
};

const initAdmin = async () => {
  try {
    await backfillAccountNumbers();
    await ensureAdminUser();
  } catch (e) {
    console.warn('[AdminService] initAdmin failed:', e);
  }
};

const listUsers = async () => {
  const users = await UserModel.findWithHoldingsCount();
  return users.map((u) => ({
    id: u.id,
    account_number: u.account_number,
    name: u.name,
    email: u.email,
    phone: u.phone,
    wallet_balance: Number(u.wallet_balance || 0),
    account_balance: Number(u.account_balance || 0),
    monthly_income: Number(u.monthly_income || 0),
    is_admin: Boolean(u.is_admin),
    holdings_count: Number(u.holdings_count || 0),
    created_at: u.created_at,
    last_login: u.last_login,
  }));
};

const creditWallet = async (userId, amount, note) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }

  return transaction(async (conn) => {
    await UserModel.incrementWallet(conn, userId, amount);
    await TransactionModel.create(conn, {
      user_id: userId,
      amount,
      description: note || 'Admin wallet credit',
      category: 'income',
      transaction_date: new Date(),
      source: 'admin_credit',
      merchant: 'HisaabAI Admin',
    });
    const [[updated]] = await conn.execute(
      'SELECT id, account_number, name, wallet_balance FROM users WHERE id = ?',
      [userId],
    );
    return {
      id: updated.id,
      account_number: updated.account_number,
      name: updated.name,
      wallet_balance: Number(updated.wallet_balance),
    };
  });
};

module.exports = { initAdmin, listUsers, creditWallet };
