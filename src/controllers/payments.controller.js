const { sendMoney, listTransfers, lookupUser } = require('../services/payments.service');
const { ok } = require('../helpers/response');

const handleSend = async (req, res, next) => {
  try {
    res.json(ok(await sendMoney(req.user.userId, req.body), 'Transfer successful'));
  } catch (err) { next(err); }
};

const handleListTransfers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Math.min(Number(req.query.limit) || 20, 50);
    res.json(ok(await listTransfers(req.user.userId, page, limit)));
  } catch (err) { next(err); }
};

const handleLookup = async (req, res, next) => {
  try {
    const user = await lookupUser({
      user_id: req.query.user_id ? Number(req.query.user_id) : undefined,
      account_number: req.query.account_number,
    });
    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      throw err;
    }
    res.json(ok(user));
  } catch (err) { next(err); }
};

module.exports = { handleSend, handleListTransfers, handleLookup };
