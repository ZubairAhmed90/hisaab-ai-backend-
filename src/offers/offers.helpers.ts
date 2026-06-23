import { monthEnd, parseMonth } from '../common/date.helpers';

// Build category spend totals for the current month
export const buildSpendProfile = (
  transactions: { category: string; amount: unknown }[],
) => {
  const profile: Record<string, number> = {};
  for (const txn of transactions) {
    profile[txn.category] = (profile[txn.category] || 0) + Number(txn.amount);
  }
  return profile;
};

// Score an offer against a user's spending profile
export const scoreOffer = (
  offer: {
    target_category: string;
    min_monthly_spend: unknown;
    valid_from: Date;
    valid_until: Date;
    is_active: boolean;
    current_redemptions: number;
    max_redemptions: number;
  },
  spendProfile: Record<string, number>,
) => {
  if (!offer.is_active) return 0;
  const now = new Date();
  if (now < offer.valid_from || now > offer.valid_until) return 0;
  if (offer.current_redemptions >= offer.max_redemptions) return 0;

  const categorySpend = spendProfile[offer.target_category] || 0;
  const minSpend = Number(offer.min_monthly_spend);
  if (categorySpend < minSpend) return 0;

  return Math.round((categorySpend / minSpend) * 50);
};

// Return current month date range for offer matching
export const currentMonthRange = () => {
  const start = parseMonth();
  return { gte: start, lt: monthEnd(start) };
};
