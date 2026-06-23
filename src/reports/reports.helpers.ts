// Convert a numeric score (0-100) to a letter grade
export const scoreToGrade = (score: number): string => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

// Calculate weighted overall score from component scores
export const weightedScore = (scores: {
  budget: number;
  savings: number;
  trend: number;
  debt: number;
  emergency: number;
}) =>
  Math.round(
    scores.budget * 0.3 +
      scores.savings * 0.25 +
      scores.trend * 0.2 +
      scores.debt * 0.15 +
      scores.emergency * 0.1,
  );

// Score how well user stayed within budget limits (0-100)
export const calcBudgetScore = (
  budgets: { category: string; monthly_limit: unknown }[],
  spendMap: Record<string, number>,
) => {
  if (!budgets.length) return 50;
  let within = 0;
  for (const budget of budgets) {
    const spent = spendMap[budget.category] || 0;
    if (spent <= Number(budget.monthly_limit)) within++;
  }
  return Math.round((within / budgets.length) * 100);
};

// Score savings rate as percentage of income (0-100)
export const calcSavingsScore = (income: number, spent: number) => {
  if (income <= 0) return 0;
  const rate = ((income - spent) / income) * 100;
  return Math.min(100, Math.max(0, Math.round(rate)));
};

// Offline report summary when Groq API is unavailable
export const getFallbackReportSummary = (data: {
  grade: string;
  budgetScore: number;
  savingsScore: number;
  topOverspend: string;
  improvement: string;
  language: string;
}) => {
  if (data.language === 'ur') {
    return `Is mahine aap ka grade ${data.grade} hai. Budget score ${data.budgetScore}/100 aur savings score ${data.savingsScore}/100 hai. Sab se zyada kharch ${data.topOverspend} par hua (${data.improvement} vs pichle mahine). Agle month budget par qaim rahen aur HisaabAI mein roz log karte rahen.`;
  }
  return `This month you earned a ${data.grade} grade with a budget score of ${data.budgetScore}/100 and savings score of ${data.savingsScore}/100. Your top spending category was ${data.topOverspend}, and your trend is ${data.improvement} compared to last month. Keep logging transactions in HisaabAI and focus on staying within budget next month.`;
};
