const { parseMonth, monthEnd } = require('./date.helpers');

const buildSpendProfile = (transactions) => {
  const profile = {};
  for (const txn of transactions) {
    profile[txn.category] = (profile[txn.category] || 0) + Number(txn.amount);
  }
  return profile;
};

const scoreOffer = (offer, spendProfile) => {
  if (!offer.is_active) return 0;
  const now = new Date();
  if (now < new Date(offer.valid_from) || now > new Date(offer.valid_until)) return 0;
  if (offer.current_redemptions >= offer.max_redemptions) return 0;

  const categorySpend = spendProfile[offer.target_category] || 0;
  const minSpend = Number(offer.min_monthly_spend);
  if (categorySpend < minSpend) return 0;

  return Math.round((categorySpend / minSpend) * 50);
};

const currentMonthRange = () => {
  const start = parseMonth();
  return { start, end: monthEnd(start) };
};

module.exports = { buildSpendProfile, scoreOffer, currentMonthRange };
