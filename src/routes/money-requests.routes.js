const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const {
  handleList, handleCreate, handleAccept, handleDecline, handleCancel,
} = require('../controllers/money-requests.controller');

const createSchema = Joi.object({
  payer_user_id: Joi.number().integer().optional(),
  account_number: Joi.string().optional(),
  amount: Joi.number().positive().required(),
  reason: Joi.string().max(255).allow('', null).optional(),
}).or('payer_user_id', 'account_number');

router.use(auth);

router.get('/', handleList);
router.post('/', validate(createSchema), handleCreate);
router.post('/:id/accept', handleAccept);
router.post('/:id/decline', handleDecline);
router.post('/:id/cancel', handleCancel);

module.exports = router;
