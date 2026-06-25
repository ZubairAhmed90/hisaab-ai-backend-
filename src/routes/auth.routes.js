const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const {
  handleRegister,
  handleLogin,
  handleRefresh,
  handleGetMe,
  handleUpdateProfile,
  handleForgotPassword,
  handleResetPassword,
} = require('../controllers/auth.controller');

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().optional().allow('', null),
  monthly_income: Joi.number().optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().min(3).required(),
  password: Joi.string().required(),
});

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const forgotSchema = Joi.object({
  email: Joi.string().email().required(),
});

const resetSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const updateProfileSchema = Joi.object({
  name: Joi.string().optional(),
  phone: Joi.string().optional().allow('', null),
  monthly_income: Joi.number().optional(),
  preferred_language: Joi.string().valid('en', 'ur').optional(),
});

router.post('/register', validate(registerSchema), handleRegister);
router.post('/login', validate(loginSchema), handleLogin);
router.post('/refresh', validate(refreshSchema), handleRefresh);
router.post('/forgot-password', validate(forgotSchema), handleForgotPassword);
router.post('/reset-password', validate(resetSchema), handleResetPassword);
router.get('/me', auth, handleGetMe);
router.put('/profile', auth, validate(updateProfileSchema), handleUpdateProfile);

module.exports = router;
