const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const {
  handleGetPortfolio,
  handleGetWallet,
  handleGetTrades,
  handleBuyStock,
  handleSellStock,
  handleTransfer,
} = require('../controllers/portfolio.controller');

const tradeSchema = Joi.object({
  ticker: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
});

const transferSchema = Joi.object({
  amount: Joi.number().min(1).required(),
  direction: Joi.string().valid('to_account', 'to_wallet').required(),
});

router.use(auth);

router.get('/', handleGetPortfolio);
router.get('/wallet', handleGetWallet);
router.get('/trades', handleGetTrades);
router.post('/buy', validate(tradeSchema), handleBuyStock);
router.post('/sell', validate(tradeSchema), handleSellStock);
router.post('/transfer', validate(transferSchema), handleTransfer);

module.exports = router;
