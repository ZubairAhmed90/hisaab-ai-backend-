const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handlePay, handleHistory } = require('../controllers/bills.controller');

const paySchema = Joi.object({
  biller_code: Joi.string().required(),
  biller_name: Joi.string().required(),
  consumer_number: Joi.string().required(),
  amount: Joi.number().positive().required(),
});

router.use(auth);

router.get('/history', handleHistory);
router.post('/pay', validate(paySchema), handlePay);

module.exports = router;
