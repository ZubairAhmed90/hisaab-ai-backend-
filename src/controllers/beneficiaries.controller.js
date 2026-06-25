const beneficiariesService = require('../services/beneficiaries.service');
const { ok } = require('../helpers/response');

const handleList = async (req, res, next) => {
  try { res.json(ok(await beneficiariesService.list(req.user.userId))); } catch (err) { next(err); }
};

const handleCreate = async (req, res, next) => {
  try { res.json(ok(await beneficiariesService.create(req.user.userId, req.body), 'Beneficiary saved')); } catch (err) { next(err); }
};

const handleUpdate = async (req, res, next) => {
  try { res.json(ok(await beneficiariesService.update(req.user.userId, Number(req.params.id), req.body), 'Beneficiary updated')); } catch (err) { next(err); }
};

const handleRemove = async (req, res, next) => {
  try { res.json(ok(await beneficiariesService.remove(req.user.userId, Number(req.params.id)), 'Beneficiary removed')); } catch (err) { next(err); }
};

module.exports = { handleList, handleCreate, handleUpdate, handleRemove };
