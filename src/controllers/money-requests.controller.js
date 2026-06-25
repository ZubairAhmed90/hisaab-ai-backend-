const moneyRequestsService = require('../services/money-requests.service');
const { ok } = require('../helpers/response');

const handleList = async (req, res, next) => {
  try {
    res.json(ok(await moneyRequestsService.list(
      req.user.userId,
      req.query.direction || 'all',
      req.query.status,
    )));
  } catch (err) { next(err); }
};

const handleCreate = async (req, res, next) => {
  try { res.json(ok(await moneyRequestsService.create(req.user.userId, req.body), 'Request sent')); } catch (err) { next(err); }
};

const handleAccept = async (req, res, next) => {
  try { res.json(ok(await moneyRequestsService.accept(req.user.userId, Number(req.params.id)), 'Request paid')); } catch (err) { next(err); }
};

const handleDecline = async (req, res, next) => {
  try { res.json(ok(await moneyRequestsService.decline(req.user.userId, Number(req.params.id)), 'Request declined')); } catch (err) { next(err); }
};

const handleCancel = async (req, res, next) => {
  try { res.json(ok(await moneyRequestsService.cancel(req.user.userId, Number(req.params.id)), 'Request cancelled')); } catch (err) { next(err); }
};

module.exports = { handleList, handleCreate, handleAccept, handleDecline, handleCancel };
