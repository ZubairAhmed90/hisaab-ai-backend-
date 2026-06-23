import { periodToChangeField } from '../common/date.helpers';

// Calculate total overspend across budget categories for a period
export const calcOverspend = (
  budgets: { category: string; monthly_limit: unknown }[],
  spendByCategory: Record<string, number>,
) => {
  let overspend = 0;
  for (const budget of budgets) {
    const spent = spendByCategory[budget.category] || 0;
    const limit = Number(budget.monthly_limit);
    if (spent > limit) overspend += spent - limit;
  }
  return overspend;
};

// Map cached market assets to investment mirror values
export const mapInvestments = (
  assets: Record<string, unknown>[],
  overspend: number,
  period: string,
) => {
  const field = periodToChangeField(period);
  return assets.map((asset) => {
    const returnPct = Number(asset[field] || 0);
    const currentValue = overspend * (1 + returnPct / 100);
    return {
      asset: asset.asset_type,
      ticker: asset.ticker,
      current_value: Math.round(currentValue),
      return_pct: returnPct,
    };
  });
};

// Build month list going back N months from today
export const monthsBack = (count: number): Date[] => {
  const months = [];
  const now = new Date();
  for (let index = 0; index < count; index++) {
    months.push(new Date(now.getFullYear(), now.getMonth() - index, 1));
  }
  return months;
};
