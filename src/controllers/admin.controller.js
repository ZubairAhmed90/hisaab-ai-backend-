const { listUsers, creditWallet } = require('../services/admin.service');
const { simulatePrices } = require('../services/market.service');
const UserModel = require('../models/user.model');
const { ok } = require('../helpers/response');

const handleListUsers = async (req, res, next) => {
  try {
    res.json(ok(await listUsers()));
  } catch (err) { next(err); }
};

const handleCreditWallet = async (req, res, next) => {
  try {
    const { amount, note } = req.body;
    res.json(ok(await creditWallet(Number(req.params.id), amount, note), 'Wallet credited'));
  } catch (err) { next(err); }
};

const handleMarketTick = async (req, res, next) => {
  try {
    res.json(ok(await simulatePrices(), 'Prices ticked'));
  } catch (err) { next(err); }
};

const handleAdminMe = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.userId);
    res.json(ok(user ? { id: user.id, name: user.name, email: user.email, is_admin: user.is_admin } : null));
  } catch (err) { next(err); }
};

module.exports = { handleListUsers, handleCreditWallet, handleMarketTick, handleAdminMe };
