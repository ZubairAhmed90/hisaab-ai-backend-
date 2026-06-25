const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleChat, handleGetTips } = require('../controllers/ai.controller');

const chatSchema = Joi.object({
  message: Joi.string().required(),
  language: Joi.string().valid('en', 'ur').default('en'),
});

router.use(auth);

router.post('/chat', validate(chatSchema), handleChat);
router.get('/tips', handleGetTips);

module.exports = router;
