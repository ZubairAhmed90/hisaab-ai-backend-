const { periodToChangeField } = require('./date.helpers');

const calcOverspend = (budgets, spendByCategory) => {
  let overspend = 0;
  for (const budget of budgets) {
    const spent = spendByCategory[budget.category] || 0;
    const limit = Number(budget.monthly_limit);
    if (spent > limit) overspend += spent - limit;
  }
  return overspend;
};

const mapInvestments = (assets, overspend, period) => {
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

const monthsBack = (count) => {
  const months = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    months.push(new Date(now.getFullYear(), now.getMonth() - i, 1));
  }
  return months;
};

module.exports = { calcOverspend, mapInvestments, monthsBack };
