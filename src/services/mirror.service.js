const BudgetModel = require('../models/budget.model');
const TransactionModel = require('../models/transaction.model');
const MarketModel = require('../models/market.model');
const { monthEnd } = require('../helpers/date.helpers');
const { calcOverspend, mapInvestments, monthsBack } = require('../helpers/mirror.helpers');

const PERIOD_MONTHS = { '1m': 1, '3m': 3, '6m': 6, '12m': 12 };

const getMirror = async (userId, period = '1m') => {
  const monthCount = PERIOD_MONTHS[period] || 1;
  const monthList = monthsBack(monthCount);
  let totalOverspend = 0;

  for (const monthStart of monthList) {
    const monthEndDate = monthEnd(monthStart);
    const [budgets, transactions] = await Promise.all([
      BudgetModel.findByMonth(userId, monthStart),
      TransactionModel.findByDateRange(userId, monthStart, monthEndDate),
    ]);

    const spendByCategory = {};
    for (const txn of transactions) {
      spendByCategory[txn.category] = (spendByCategory[txn.category] || 0) + Number(txn.amount);
    }
    totalOverspend += calcOverspend(budgets, spendByCategory);
  }

  const assets = await MarketModel.findAll();
  const investments = mapInvestments(assets, totalOverspend, period);
  return { overspend: Math.round(totalOverspend), investments };
};

module.exports = { getMirror };
