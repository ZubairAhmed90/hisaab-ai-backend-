const UserModel = require('../models/user.model');

async function generateUniqueAccountNumber() {
  for (let attempt = 0; attempt < 20; attempt++) {
    const num = `HA-${Math.floor(100000 + Math.random() * 900000)}`;
    const exists = await UserModel.findByAccountNumber(num);
    if (!exists) return num;
  }
  throw new Error('Could not generate unique account number');
}

function formatUserProfile(user) {
  return {
    id: user.id,
    account_number: user.account_number,
    name: user.name,
    email: user.email,
    phone: user.phone,
    preferred_language: user.preferred_language,
    monthly_income: Number(user.monthly_income || 0),
    wallet_balance: Number(user.wallet_balance || 0),
    account_balance: Number(user.account_balance || 0),
    is_admin: Boolean(user.is_admin),
  };
}

module.exports = { generateUniqueAccountNumber, formatUserProfile };
