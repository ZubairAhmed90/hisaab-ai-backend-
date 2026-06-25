const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleSend, handleListTransfers, handleLookup } = require('../controllers/payments.controller');

const sendSchema = Joi.object({
  recipient_user_id: Joi.number().integer().optional(),
  account_number: Joi.string().optional(),
  amount: Joi.number().positive().required(),
  note: Joi.string().max(255).allow('', null).optional(),
  save_beneficiary: Joi.boolean().optional(),
}).or('recipient_user_id', 'account_number');

router.use(auth);

router.get('/lookup', handleLookup);
router.get('/transfers', handleListTransfers);
router.post('/send', validate(sendSchema), handleSend);

module.exports = router;
