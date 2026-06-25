const { list, create, update, remove } = require('../services/goals.service');
const { ok } = require('../helpers/response');

const handleList = async (req, res, next) => {
  try { res.json(ok(await list(req.user.userId))); } catch (err) { next(err); }
};

const handleCreate = async (req, res, next) => {
  try { res.status(201).json(ok(await create(req.user.userId, req.body), 'Goal created')); } catch (err) { next(err); }
};

const handleUpdate = async (req, res, next) => {
  try {
    res.json(ok(await update(req.user.userId, Number(req.params.id), req.body.saved_amount)));
  } catch (err) { next(err); }
};

const handleRemove = async (req, res, next) => {
  try { res.json(ok(await remove(req.user.userId, Number(req.params.id)), 'Goal deleted')); } catch (err) { next(err); }
};

module.exports = { handleList, handleCreate, handleUpdate, handleRemove };
