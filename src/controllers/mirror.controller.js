const { getMirror } = require('../services/mirror.service');
const { ok } = require('../helpers/response');

const handleGetMirror = async (req, res, next) => {
  try {
    res.json(ok(await getMirror(req.user.userId, req.query.period)));
  } catch (err) { next(err); }
};

module.exports = { handleGetMirror };
