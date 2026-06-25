const { register, login, refresh, getMe, updateProfile, forgotPassword, resetPassword } = require('../services/auth.service');
const { ok } = require('../helpers/response');

const handleRegister = async (req, res, next) => {
  try {
    res.status(201).json(ok(await register(req.body), 'Registration successful'));
  } catch (err) { next(err); }
};

const handleLogin = async (req, res, next) => {
  try {
    res.json(ok(await login(req.body), 'Login successful'));
  } catch (err) { next(err); }
};

const handleRefresh = async (req, res, next) => {
  try {
    res.json(ok(await refresh(req.body.refreshToken), 'Tokens refreshed'));
  } catch (err) { next(err); }
};

const handleGetMe = async (req, res, next) => {
  try {
    res.json(ok(await getMe(req.user.userId)));
  } catch (err) { next(err); }
};

const handleUpdateProfile = async (req, res, next) => {
  try {
    res.json(ok(await updateProfile(req.user.userId, req.body), 'Profile updated'));
  } catch (err) { next(err); }
};

const handleForgotPassword = async (req, res, next) => {
  try {
    res.json(ok(await forgotPassword(req.body.email)));
  } catch (err) { next(err); }
};

const handleResetPassword = async (req, res, next) => {
  try {
    res.json(ok(await resetPassword(req.body.token, req.body.password)));
  } catch (err) { next(err); }
};

module.exports = {
  handleRegister,
  handleLogin,
  handleRefresh,
  handleGetMe,
  handleUpdateProfile,
  handleForgotPassword,
  handleResetPassword,
};
