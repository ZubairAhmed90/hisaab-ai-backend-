const { randomBytes } = require('crypto');
const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const TransactionModel = require('../models/transaction.model');
const PeerTransferModel = require('../models/peer-transfer.model');
const BeneficiaryModel = require('../models/beneficiary.model');
const NotificationModel = require('../models/notification.model');
const { checkLimitBeforeSave } = require('./limits.service');
const { createTxnWithSnapshots, readBalances } = require('../helpers/transaction.helpers');

function makeReference() {
  return `TXN${Date.now()}${randomBytes(3).toString('hex').toUpperCase()}`;
}

function formatPublicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    account_number: user.account_number,
  };
}

async function resolveRecipient({ recipient_user_id, account_number }) {
  if (recipient_user_id) {
    const user = await UserModel.findById(recipient_user_id);
    if (!user) {
      const err = new Error('Recipient not found');
      err.status = 404;
      throw err;
    }
    return user;
  }
  if (account_number) {
    const normalized = String(account_number).trim().toUpperCase();
    let user = await UserModel.findByAccountNumber(normalized);
    if (!user && normalized.startsWith('HA-')) {
      const uid = Number(normalized.replace('HA-', ''));
      if (uid) user = await UserModel.findById(uid);
    }
    if (!user) {
      const err = new Error('No HisaabAI account found for this ID');
      err.status = 404;
      throw err;
    }
    return user;
  }
  const err = new Error('Recipient user id or account number is required');
  err.status = 400;
  throw err;
}

async function lookupUser({ user_id, account_number }) {
  if (user_id) return formatPublicUser(await UserModel.findById(user_id));
  if (account_number) {
    const normalized = String(account_number).trim().toUpperCase();
    let user = await UserModel.findByAccountNumber(normalized);
    if (!user && normalized.startsWith('HA-')) {
      const uid = Number(normalized.replace('HA-', ''));
      if (uid) user = await UserModel.findById(uid);
    }
    return formatPublicUser(user);
  }
  const err = new Error('user_id or account_number is required');
  err.status = 400;
  throw err;
}

async function upsertLinkedBeneficiary(userId, recipient) {
  const existing = await BeneficiaryModel.findByLinkedUser(userId, recipient.id);
  if (existing) return existing;
  return BeneficiaryModel.create({
    user_id: userId,
    linked_user_id: recipient.id,
    name: recipient.name,
    bank: 'HisaabAI',
    account_number: recipient.account_number,
    is_favorite: false,
  });
}

const sendMoney = async (senderId, dto) => {
  const amount = Number(dto.amount);
  if (!amount || amount <= 0) {
    const err = new Error('Amount must be greater than zero');
    err.status = 400;
    throw err;
  }

  const recipient = await resolveRecipient(dto);
  if (recipient.id === senderId) {
    const err = new Error('Cannot send money to yourself');
    err.status = 400;
    throw err;
  }

  const check = await checkLimitBeforeSave(senderId, 'transfer', amount);
  if (!check.allowed) {
    const err = new Error(check.message);
    err.status = 400;
    throw err;
  }

  const sender = await UserModel.findById(senderId);
  if (!sender) {
    const err = new Error('Sender not found');
    err.status = 404;
    throw err;
  }
  if (Number(sender.account_balance) < amount) {
    const err = new Error(`Insufficient account balance. Need Rs ${amount}, have Rs ${sender.account_balance}`);
    err.status = 400;
    throw err;
  }

  const reference = makeReference();
  const note = dto.note?.trim() || null;
  const today = new Date();

  const result = await transaction(async (conn) => {
    const senderBefore = await readBalances(conn, senderId);
    const recipientBefore = await readBalances(conn, recipient.id);

    await UserModel.decrementAccount(conn, senderId, amount);
    await UserModel.incrementAccount(conn, recipient.id, amount);

    const senderTxn = await createTxnWithSnapshots(conn, senderId, {
      amount: -amount,
      description: note ? `Sent to ${recipient.name}: ${note}` : `Sent to ${recipient.name}`,
      category: 'transfer',
      merchant: recipient.name,
      transaction_date: today,
      source: 'p2p_send',
    }, senderBefore);

    const recipientTxn = await createTxnWithSnapshots(conn, recipient.id, {
      amount: amount,
      description: note ? `Received from ${sender.name}: ${note}` : `Received from ${sender.name}`,
      category: 'income',
      merchant: sender.name,
      transaction_date: today,
      source: 'p2p_receive',
    }, recipientBefore);

    const transfer = await PeerTransferModel.create(conn, {
      reference,
      sender_id: senderId,
      recipient_id: recipient.id,
      amount,
      fee: 0,
      note,
      sender_txn_id: senderTxn.id,
      recipient_txn_id: recipientTxn.id,
    });

    await NotificationModel.create(conn, {
      user_id: recipient.id,
      type: 'money_received',
      title: 'Money received',
      body: `You received Rs ${amount.toLocaleString()} in your account from ${sender.name}`,
      payload: {
        transfer_id: transfer.id,
        reference,
        amount,
        sender_id: senderId,
        sender_name: sender.name,
      },
    });

    return { transfer, senderTxn, recipientTxn };
  });

  if (dto.save_beneficiary !== false) {
    await upsertLinkedBeneficiary(senderId, recipient).catch(() => null);
  }

  const [senderUser, recipientUser] = await Promise.all([
    UserModel.findById(senderId),
    UserModel.findById(recipient.id),
  ]);

  return {
    reference: result.transfer.reference,
    amount,
    note,
    recipient: formatPublicUser(recipient),
    sender_account_balance: Number(senderUser.account_balance),
    sender_wallet_balance: Number(senderUser.wallet_balance),
    sender_account_balance_before: result.senderTxn.account_balance_before,
    sender_account_balance_after: result.senderTxn.account_balance_after,
    sender_wallet_balance_before: result.senderTxn.wallet_balance_before,
    sender_wallet_balance_after: result.senderTxn.wallet_balance_after,
    recipient_account_balance: Number(recipientUser.account_balance),
    recipient_wallet_balance: Number(recipientUser.wallet_balance),
    transaction_id: result.senderTxn.id,
    created_at: result.transfer.created_at,
  };
};

const listTransfers = async (userId, page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  const items = await PeerTransferModel.listForUser(userId, { limit, offset });
  return {
    items: items.map((t) => ({
      ...t,
      direction: t.sender_id === userId ? 'sent' : 'received',
      counterparty_name: t.sender_id === userId ? t.recipient_name : t.sender_name,
      counterparty_account: t.sender_id === userId ? t.recipient_account : t.sender_account,
    })),
    page,
    limit,
  };
};

module.exports = { sendMoney, listTransfers, lookupUser, resolveRecipient, formatPublicUser, upsertLinkedBeneficiary };
