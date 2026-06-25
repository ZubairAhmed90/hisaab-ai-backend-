const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { handleListUsers, handleCreditWallet, handleMarketTick, handleAdminMe } = require('../controllers/admin.controller');

const creditSchema = Joi.object({
  amount: Joi.number().positive().required(),
  note: Joi.string().optional().allow('', null),
});

router.use(auth, admin);

router.get('/users', handleListUsers);
router.post('/users/:id/credit', validate(creditSchema), handleCreditWallet);
router.post('/market/tick', handleMarketTick);
router.get('/me', handleAdminMe);

module.exports = router;
