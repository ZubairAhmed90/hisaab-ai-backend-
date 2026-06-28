const { getWallet, getPortfolio, buyStock, sellStock, getTrades, transferBalance } = require('../services/portfolio.service');
const { ok } = require('../helpers/response');

const handleGetPortfolio = async (req, res, next) => {
  try { res.json(ok(await getPortfolio(req.user.userId))); } catch (err) { next(err); }
};

const handleGetWallet = async (req, res, next) => {
  try { res.json(ok(await getWallet(req.user.userId))); } catch (err) { next(err); }
};

const handleGetTrades = async (req, res, next) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 20, 100);
    const ticker = req.query.ticker?.trim() || undefined;
    const days = req.query.days ? Number(req.query.days) : undefined;
    res.json(ok(await getTrades(req.user.userId, { limit, ticker, days })));
  } catch (err) { next(err); }
};

const handleBuyStock = async (req, res, next) => {
  try {
    await buyStock(req.user.userId, req.body.ticker, req.body.quantity);
    res.json(ok(await getPortfolio(req.user.userId), 'Stock purchased'));
  } catch (err) { next(err); }
};

const handleSellStock = async (req, res, next) => {
  try {
    await sellStock(req.user.userId, req.body.ticker, req.body.quantity);
    res.json(ok(await getPortfolio(req.user.userId), 'Stock sold'));
  } catch (err) { next(err); }
};

const handleTransfer = async (req, res, next) => {
  try {
    res.json(ok(await transferBalance(req.user.userId, req.body.amount, req.body.direction), 'Transfer complete'));
  } catch (err) { next(err); }
};

module.exports = { handleGetPortfolio, handleGetWallet, handleGetTrades, handleBuyStock, handleSellStock, handleTransfer };
