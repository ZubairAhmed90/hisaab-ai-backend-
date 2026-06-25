const { getAll, getByType, getCatalog } = require('../services/market.service');
const { ok } = require('../helpers/response');

const handleGetAll = async (req, res, next) => {
  try { res.json(ok(await getAll())); } catch (err) { next(err); }
};

const handleGetCatalog = (req, res) => res.json(ok(getCatalog()));

const handleGetStocks = async (req, res, next) => {
  try { res.json(ok(await getByType('stock'))); } catch (err) { next(err); }
};

const handleGetGold = async (req, res, next) => {
  try {
    const rows = await getByType('gold');
    res.json(ok(rows[0] || null));
  } catch (err) { next(err); }
};

const handleGetTbill = async (req, res, next) => {
  try {
    const rows = await getByType('tbill');
    res.json(ok(rows[0] || null));
  } catch (err) { next(err); }
};

module.exports = { handleGetAll, handleGetCatalog, handleGetStocks, handleGetGold, handleGetTbill };
