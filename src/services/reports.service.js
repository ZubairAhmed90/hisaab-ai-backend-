const UserModel = require('../models/user.model');
const BudgetModel = require('../models/budget.model');
const TransactionModel = require('../models/transaction.model');
const ReportModel = require('../models/report.model');
const { reportSummary } = require('./ai.service');
const { parseMonth, monthEnd } = require('../helpers/date.helpers');
const { calcBudgetScore, calcSavingsScore, getFallbackReportSummary, scoreToGrade, weightedScore } = require('../helpers/reports.helpers');

const findCachedReport = async (userId, month) => {
  const monthStart = parseMonth(month);
  const exact = await ReportModel.findByUserAndMonth(userId, monthStart);
  if (exact) return exact;

  if (month) {
    const [year, mon] = month.split('-').map(Number);
    const reports = await ReportModel.findAllByUser(userId);
    return (
      reports.find((r) => {
        const d = new Date(r.month);
        return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === mon;
      }) ?? null
    );
  }

  return ReportModel.findInMonthRange(userId, monthStart, monthEnd(monthStart));
};

const getMonthly = async (userId, month) => {
  const cached = await findCachedReport(userId, month);
  if (cached) return cached;

  const monthStart = parseMonth(month);
  const end = monthEnd(monthStart);

  const user = await UserModel.findById(userId);
  const income = Number(user?.monthly_income || 0);
  const language = user?.preferred_language || 'en';

  const [transactions, budgets] = await Promise.all([
    TransactionModel.findByDateRange(userId, monthStart, end),
    BudgetModel.findByMonth(userId, monthStart),
  ]);

  const spendMap = {};
  let totalSpent = 0;
  for (const txn of transactions) {
    const amount = Number(txn.amount);
    if (txn.category === 'income') continue;
    totalSpent += amount;
    spendMap[txn.category] = (spendMap[txn.category] || 0) + amount;
  }

  const budgetScore = calcBudgetScore(budgets, spendMap);
  const savingsScore = calcSavingsScore(income, totalSpent);
  const trendScore = savingsScore > 50 ? 80 : 60;
  const debtScore = 70;
  const emergencyScore = savingsScore > 20 ? 75 : 40;
  const overall = weightedScore({ budget: budgetScore, savings: savingsScore, trend: trendScore, debt: debtScore, emergency: emergencyScore });

  const topCategory =
    Object.entries(spendMap)
      .filter(([cat]) => cat !== 'income')
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'none';

  const grade = scoreToGrade(overall);
  const summaryInput = { grade, budgetScore, savingsScore, topOverspend: topCategory, improvement: 'stable', language };

  let summary;
  try {
    summary = await reportSummary(summaryInput);
  } catch {
    summary = getFallbackReportSummary(summaryInput);
  }

  try {
    return await ReportModel.create({
      user_id: userId,
      month: monthStart,
      overall_grade: grade,
      budget_score: budgetScore,
      savings_score: savingsScore,
      trend_score: trendScore,
      summary_en: summary,
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      const existing = await findCachedReport(userId, month);
      if (existing) return existing;
    }
    throw err;
  }
};

module.exports = { getMonthly };
