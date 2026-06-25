const billsService = require('../services/bills.service');
const { ok } = require('../helpers/response');

const handlePay = async (req, res, next) => {
  try { res.json(ok(await billsService.payBill(req.user.userId, req.body), 'Bill paid')); } catch (err) { next(err); }
};

const handleHistory = async (req, res, next) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 30, 100);
    res.json(ok(await billsService.history(req.user.userId, limit)));
  } catch (err) { next(err); }
};

module.exports = { handlePay, handleHistory };
