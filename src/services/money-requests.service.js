const MoneyRequestModel = require('../models/money-request.model');
const NotificationModel = require('../models/notification.model');
const UserModel = require('../models/user.model');
const { sendMoney, resolveRecipient } = require('./payments.service');

const list = async (userId, direction = 'all', status) =>
  MoneyRequestModel.listForUser(userId, direction, status);

const create = async (requesterId, dto) => {
  const amount = Number(dto.amount);
  if (!amount || amount <= 0) {
    const err = new Error('Amount must be greater than zero');
    err.status = 400;
    throw err;
  }

  const payer = await resolveRecipient({
    recipient_user_id: dto.payer_user_id,
    account_number: dto.account_number,
  });

  if (payer.id === requesterId) {
    const err = new Error('Cannot request money from yourself');
    err.status = 400;
    throw err;
  }

  const requester = await UserModel.findById(requesterId);
  const row = await MoneyRequestModel.create({
    requester_id: requesterId,
    payer_id: payer.id,
    amount,
    reason: dto.reason?.trim() || null,
  });

  await NotificationModel.create(null, {
    user_id: payer.id,
    type: 'money_request',
    title: 'Money request',
    body: `${requester.name} requested Rs ${amount.toLocaleString()}${dto.reason ? `: ${dto.reason}` : ''}`,
    payload: {
      request_id: row.id,
      amount,
      requester_id: requesterId,
      requester_name: requester.name,
      reason: dto.reason || null,
    },
  });

  return row;
};

const accept = async (userId, id) => {
  const req = await MoneyRequestModel.findForUser(id, userId);
  if (!req) {
    const err = new Error('Request not found');
    err.status = 404;
    throw err;
  }
  if (req.payer_id !== userId) {
    const err = new Error('Only the payer can accept this request');
    err.status = 403;
    throw err;
  }
  if (req.status !== 'pending') {
    const err = new Error(`Request already ${req.status}`);
    err.status = 400;
    throw err;
  }

  const transfer = await sendMoney(userId, {
    recipient_user_id: req.requester_id,
    amount: req.amount,
    note: req.reason || 'Money request paid',
    save_beneficiary: true,
  });

  const peerTransfer = await require('../models/peer-transfer.model').findByReference(transfer.reference);
  const updated = await MoneyRequestModel.updateStatus(id, 'paid', peerTransfer?.id || null);

  await NotificationModel.create(null, {
    user_id: req.requester_id,
    type: 'request_paid',
    title: 'Request paid',
    body: `Your request for Rs ${Number(req.amount).toLocaleString()} was paid`,
    payload: { request_id: id, reference: transfer.reference, amount: req.amount },
  });

  return { request: updated, transfer };
};

const decline = async (userId, id) => {
  const req = await MoneyRequestModel.findForUser(id, userId);
  if (!req) {
    const err = new Error('Request not found');
    err.status = 404;
    throw err;
  }
  if (req.payer_id !== userId) {
    const err = new Error('Only the payer can decline this request');
    err.status = 403;
    throw err;
  }
  if (req.status !== 'pending') {
    const err = new Error(`Request already ${req.status}`);
    err.status = 400;
    throw err;
  }

  const updated = await MoneyRequestModel.updateStatus(id, 'declined');
  const requester = await UserModel.findById(req.requester_id);
  const payer = await UserModel.findById(userId);
  await NotificationModel.create(null, {
    user_id: req.requester_id,
    type: 'request_declined',
    title: 'Request declined',
    body: `${payer.name} declined your request for Rs ${Number(req.amount).toLocaleString()}`,
    payload: { request_id: id, amount: req.amount },
  });

  return updated;
};

const cancel = async (userId, id) => {
  const req = await MoneyRequestModel.findForUser(id, userId);
  if (!req || req.requester_id !== userId) {
    const err = new Error('Request not found');
    err.status = 404;
    throw err;
  }
  if (req.status !== 'pending') {
    const err = new Error(`Request already ${req.status}`);
    err.status = 400;
    throw err;
  }
  return MoneyRequestModel.updateStatus(id, 'cancelled');
};

module.exports = { list, create, accept, decline, cancel };
