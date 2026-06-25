const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleGetTopOffers, handleRedeem, handleFeedback } = require('../controllers/offers.controller');

const feedbackSchema = Joi.object({
  rating: Joi.string().valid('relevant', 'not_relevant').required(),
});

router.use(auth);

router.get('/', handleGetTopOffers);
router.post('/:id/redeem', handleRedeem);
router.post('/:id/feedback', validate(feedbackSchema), handleFeedback);

module.exports = router;
