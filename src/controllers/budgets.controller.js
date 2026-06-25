const { list, create, update, remove } = require('../services/budgets.service');
const { ok } = require('../helpers/response');

const handleList = async (req, res, next) => {
  try { res.json(ok(await list(req.user.userId))); } catch (err) { next(err); }
};

const handleCreate = async (req, res, next) => {
  try { res.status(201).json(ok(await create(req.user.userId, req.body), 'Budget created')); } catch (err) { next(err); }
};

const handleUpdate = async (req, res, next) => {
  try { res.json(ok(await update(req.user.userId, Number(req.params.id), req.body))); } catch (err) { next(err); }
};

const handleRemove = async (req, res, next) => {
  try { res.json(ok(await remove(req.user.userId, Number(req.params.id)), 'Budget deleted')); } catch (err) { next(err); }
};

module.exports = { handleList, handleCreate, handleUpdate, handleRemove };
