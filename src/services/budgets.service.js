const BudgetModel = require('../models/budget.model');
const TransactionModel = require('../models/transaction.model');
const { parseMonth, monthEnd } = require('../helpers/date.helpers');

const list = async (userId) => {
  const monthStart = parseMonth();
  const end = monthEnd(monthStart);

  const [budgets, transactions] = await Promise.all([
    BudgetModel.findByMonth(userId, monthStart),
    TransactionModel.findByDateRange(userId, monthStart, end),
  ]);

  const spendMap = {};
  for (const txn of transactions) {
    spendMap[txn.category] = (spendMap[txn.category] || 0) + Number(txn.amount);
  }

  return budgets.map((budget) => ({
    ...budget,
    monthly_limit: Number(budget.monthly_limit),
    spent: spendMap[budget.category] || 0,
    remaining: Number(budget.monthly_limit) - (spendMap[budget.category] || 0),
  }));
};

const create = async (userId, dto) => {
  return BudgetModel.create({
    user_id: userId,
    category: dto.category,
    monthly_limit: dto.monthly_limit,
    month: parseMonth(),
  });
};

const update = async (userId, id, dto) => {
  const budget = await BudgetModel.findOne(id, userId);
  if (!budget) {
    const err = new Error('Budget not found');
    err.status = 404;
    throw err;
  }
  return BudgetModel.update(budget.id, dto.monthly_limit);
};

const remove = async (userId, id) => {
  const budget = await BudgetModel.findOne(id, userId);
  if (!budget) {
    const err = new Error('Budget not found');
    err.status = 404;
    throw err;
  }
  await BudgetModel.delete(budget.id);
  return { deleted: true };
};

module.exports = { list, create, update, remove };
