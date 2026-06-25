const TransactionModel = require('../models/transaction.model');

const currentMonthRange = () => {
  const now = new Date();
  return {
    start: new Date(now.getFullYear(), now.getMonth(), 1),
    end: new Date(now.getFullYear(), now.getMonth() + 1, 1),
  };
};

const sumCategorySpend = async (userId, category) => {
  const { start, end } = currentMonthRange();
  const rows = await TransactionModel.findByCategoryAndDateRange(userId, category, start, end);
  return rows.reduce((sum, txn) => {
    const amt = Number(txn.amount);
    if (category === 'income') return sum + Math.max(0, amt);
    return sum + (amt < 0 ? -amt : amt);
  }, 0);
};

module.exports = { currentMonthRange, sumCategorySpend };
