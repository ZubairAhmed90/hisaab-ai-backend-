const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createHash, randomBytes } = require('crypto');
const UserModel = require('../models/user.model');
const { generateUniqueAccountNumber, formatUserProfile } = require('../helpers/auth.helpers');
const { seedDemoData } = require('./portfolio.service');

const generateTokens = (userId, email) => {
  const accessToken = jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId, email }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

const register = async (dto) => {
  const exists = await UserModel.findByEmail(dto.email);
  if (exists) {
    const err = new Error('Email already registered');
    err.status = 409;
    throw err;
  }

  const password_hash = await bcrypt.hash(dto.password, 10);
  const account_number = await generateUniqueAccountNumber();

  const user = await UserModel.create({
    name: dto.name,
    email: dto.email,
    password_hash,
    phone: dto.phone || null,
    monthly_income: dto.monthly_income ?? 0,
    account_number,
    wallet_balance: 0,
    account_balance: dto.monthly_income ?? 0,
  });

  seedDemoData(user.id).catch((e) => console.warn('[Auth] seedDemoData failed:', e.message));
  return { ...generateTokens(user.id, user.email), user: formatUserProfile(user) };
};

const login = async (dto) => {
  const identifier = String(dto.email).trim();
  let user = null;
  if (identifier.includes('@')) {
    user = await UserModel.findByEmail(identifier);
  } else {
    user = await UserModel.findByAccountNumber(identifier);
    if (!user) user = await UserModel.findByEmail(identifier);
  }
  if (!user) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const valid = await bcrypt.compare(dto.password, user.password_hash);
  if (!valid) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  if (!user.account_number) {
    const account_number = await generateUniqueAccountNumber();
    await UserModel.update(user.id, { account_number, last_login: true });
    user.account_number = account_number;
  } else {
    await UserModel.update(user.id, { last_login: true });
  }

  return { ...generateTokens(user.id, user.email), user: formatUserProfile(user) };
};

const refresh = async (refreshToken) => {
  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    return generateTokens(payload.userId, payload.email);
  } catch {
    const err = new Error('Invalid refresh token');
    err.status = 401;
    throw err;
  }
};

const getMe = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return formatUserProfile(user);
};

const updateProfile = async (userId, dto) => {
  const user = await UserModel.update(userId, {
    name: dto.name,
    phone: dto.phone,
    monthly_income: dto.monthly_income,
    preferred_language: dto.preferred_language,
  });
  return formatUserProfile(user);
};

const forgotPassword = async (email) => {
  const user = await UserModel.findByEmail(email);
  if (!user) return { message: 'If that email exists, a reset link has been sent.' };

  const token = randomBytes(32).toString('hex');
  const reset_token_hash = createHash('sha256').update(token).digest('hex');
  const reset_token_expires = new Date(Date.now() + 60 * 60 * 1000);

  await UserModel.update(user.id, { reset_token_hash, reset_token_expires });

  const frontend = process.env.FRONTEND_URL || 'http://localhost:3000';
  const resetLink = `${frontend}/reset-password?token=${token}`;
  const isDev = process.env.NODE_ENV !== 'production';

  return {
    message: 'If that email exists, a reset link has been sent.',
    ...(isDev ? { resetLink, resetToken: token } : {}),
  };
};

const resetPassword = async (token, password) => {
  const reset_token_hash = createHash('sha256').update(token).digest('hex');
  const user = await UserModel.findByResetToken(reset_token_hash);

  if (!user) {
    const err = new Error('Invalid or expired reset link. Request a new one.');
    err.status = 400;
    throw err;
  }

  const password_hash = await bcrypt.hash(password, 10);
  await UserModel.update(user.id, {
    password_hash,
    reset_token_hash: null,
    reset_token_expires: null,
  });

  return { message: 'Password updated successfully. You can sign in now.' };
};

module.exports = { register, login, refresh, getMe, updateProfile, forgotPassword, resetPassword };
