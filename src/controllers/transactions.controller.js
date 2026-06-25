const { create, updateCategory, list, summary, importCsv, remove } = require('../services/transactions.service');
const { ok } = require('../helpers/response');

const handleCreate = async (req, res, next) => {
  try {
    res.status(201).json(ok(await create(req.user.userId, req.body), 'Transaction created'));
  } catch (err) { next(err); }
};

const handleList = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Math.min(Number(req.query.limit) || 20, 100);
    res.json(ok(await list(req.user.userId, page, limit)));
  } catch (err) { next(err); }
};

const handleSummary = async (req, res, next) => {
  try {
    res.json(ok(await summary(req.user.userId, req.query.month)));
  } catch (err) { next(err); }
};

const handleImportCsv = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, data: null, message: 'CSV file is required' });
    }
    res.json(ok(await importCsv(req.user.userId, req.file.buffer), 'CSV imported'));
  } catch (err) { next(err); }
};

const handleUpdateCategory = async (req, res, next) => {
  try {
    res.json(ok(await updateCategory(req.user.userId, Number(req.params.id), req.body.category)));
  } catch (err) { next(err); }
};

const handleRemove = async (req, res, next) => {
  try {
    res.json(ok(await remove(req.user.userId, Number(req.params.id)), 'Transaction deleted'));
  } catch (err) { next(err); }
};

module.exports = { handleCreate, handleList, handleSummary, handleImportCsv, handleUpdateCategory, handleRemove };
