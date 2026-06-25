const { getMonthly } = require('../services/reports.service');
const { ok } = require('../helpers/response');

const handleGetMonthly = async (req, res, next) => {
  try {
    res.json(ok(await getMonthly(req.user.userId, req.query.month)));
  } catch (err) { next(err); }
};

module.exports = { handleGetMonthly };
