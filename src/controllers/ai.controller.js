const { chat, getTips } = require('../services/ai.service');
const { ok } = require('../helpers/response');

const handleChat = async (req, res, next) => {
  try {
    res.json(ok(await chat(req.user.userId, req.body.message, req.body.language || 'en')));
  } catch (err) { next(err); }
};

const handleGetTips = async (req, res, next) => {
  try {
    res.json(ok(await getTips(req.user.userId, req.query.language || 'en')));
  } catch (err) { next(err); }
};

module.exports = { handleChat, handleGetTips };
