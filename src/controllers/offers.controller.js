const { getTopOffers, redeem, feedback } = require('../services/offers.service');
const { ok } = require('../helpers/response');

const handleGetTopOffers = async (req, res, next) => {
  try { res.json(ok(await getTopOffers(req.user.userId))); } catch (err) { next(err); }
};

const handleRedeem = async (req, res, next) => {
  try {
    res.json(ok(await redeem(req.user.userId, Number(req.params.id)), 'Offer redeemed'));
  } catch (err) { next(err); }
};

const handleFeedback = async (req, res, next) => {
  try {
    res.json(ok(await feedback(req.user.userId, Number(req.params.id), req.body.rating), 'Feedback recorded'));
  } catch (err) { next(err); }
};

module.exports = { handleGetTopOffers, handleRedeem, handleFeedback };
