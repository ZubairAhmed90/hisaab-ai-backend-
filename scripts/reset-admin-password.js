/**
 * Reset admin password to match ADMIN_EMAIL / ADMIN_PASSWORD in .env
 * Usage: node scripts/reset-admin-password.js
 */
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { initAdmin } = require('../src/services/admin.service');

initAdmin()
  .then(() => {
    const email = process.env.ADMIN_EMAIL || 'admin@hisaab.ai';
    console.log(`Admin password reset for ${email}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Failed:', err.message);
    process.exit(1);
  });
