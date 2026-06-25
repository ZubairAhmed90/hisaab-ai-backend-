const UserModel = require('../models/user.model');
const BudgetModel = require('../models/budget.model');
const TransactionModel = require('../models/transaction.model');
const { parseMonth, monthEnd } = require('./date.helpers');

const buildUserSnapshot = async (userId) => {
  const user = await UserModel.findById(userId);
  const monthStart = parseMonth();
  const monthEndDate = monthEnd(monthStart);

  const transactions = await TransactionModel.findByDateRange(userId, monthStart, monthEndDate);

  const categoryTotals = {};
  let totalSpent = 0;
  for (const txn of transactions) {
    const amount = Number(txn.amount);
    if (txn.category === 'income') continue;
    totalSpent += amount;
    categoryTotals[txn.category] = (categoryTotals[txn.category] || 0) + amount;
  }

  const topEntry = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];
  const budgets = await BudgetModel.findByMonth(userId, monthStart);

  const overBudget = budgets
    .filter((b) => (categoryTotals[b.category] || 0) > Number(b.monthly_limit))
    .map((b) => b.category);

  const income = Number(user?.monthly_income || 0);
  const savingsRate = income > 0 ? Math.round(((income - totalSpent) / income) * 100) : 0;

  return {
    income,
    totalSpent,
    topCategory: topEntry?.[0] || 'other',
    topAmount: topEntry?.[1] || 0,
    overBudgetCategories: overBudget,
    savingsRate,
  };
};

const FALLBACK_TIPS_EN = {
  food: [
    'Cook 2 extra meals at home this week — saves ~Rs. 3,000 compared to daily Foodpanda orders.',
    'Use Foodpanda deals only on weekends; pack lunch on weekdays to cut food spend by 30%.',
    'Set a Rs. 500/day food cap in HisaabAI and log every meal to stay on track.',
  ],
  transport: [
    'Try Careem Bike or metro for short trips instead of ride-hailing — saves Rs. 200+ per trip.',
    'Pool rides with colleagues 2 days a week to halve your Careem/Uber bill.',
    'Fill petrol on Tuesday mornings when PSO stations often have shorter queues and stable prices.',
  ],
  shopping: [
    'Wait 48 hours before any Daraz purchase over Rs. 2,000 — most impulse buys fade away.',
    'Compare prices on PriceOye before buying electronics; savings of 10–15% are common.',
    'Shop during Daraz sales with a pre-set budget instead of browsing open-ended.',
  ],
  utilities: [
    'Switch off the water heater after 20 minutes — cuts LESCO/WAPDA bills noticeably.',
    'Replace old bulbs with LED lights to reduce your K-Electric bill by up to 40%.',
    'Review SNGPL/SSGC usage monthly and fix any gas leaks promptly.',
  ],
  health: [
    'Buy generic medicines at local pharmacies — often 50% cheaper than branded options.',
    'Use Shaukat Khanum or government hospital labs for routine tests at lower cost.',
    'Set aside Rs. 2,000/month in a health buffer so emergencies do not break your budget.',
  ],
  entertainment: [
    'Share one Netflix/Spotify family plan with siblings — split cost four ways.',
    'Pick one paid outing per week instead of three; free parks and home movie nights work well.',
    'Use bank card offers on cinema tickets — HBL and Meezan often have 50% off deals.',
  ],
  education: [
    'Buy second-hand textbooks from OLX or campus groups to save Rs. 5,000+ per semester.',
    'Use free YouTube and Coursera courses before paying for expensive coaching.',
    'Budget education expenses at the start of the month so they never surprise you.',
  ],
  other: [
    "Review last week's transactions and cancel one subscription you no longer use.",
    'Move 10% of income to savings on payday — before any discretionary spending.',
    'Create category budgets in HisaabAI to keep discretionary spending under control.',
  ],
};

const FALLBACK_TIPS_UR = {
  food: [
    'Ghar par 2 extra meals pakao — roz Foodpanda se Rs. 3,000 tak bach sakte hain.',
    'Weekdays par lunch ghar se le jao, weekends par hi Foodpanda use karo.',
    'HisaabAI mein Rs. 500/day food limit set karo aur har meal log karo.',
  ],
  transport: [
    'Chhoti trips ke liye Careem Bike ya metro try karo — har trip par Rs. 200+ bachat.',
    'Colleagues ke sath 2 din ride share karo, Careem bill aadha ho jayega.',
    'PSO par petrol Tuesday subah bhari karo — queues chhoti aur prices stable rehti hain.',
  ],
  shopping: [
    'Rs. 2,000 se zyada Daraz order se pehle 48 ghante wait karo — impulse kam ho jati hai.',
    'Electronics se pehle PriceOye par compare karo — 10–15% bachat common hai.',
    'Daraz sale par fixed budget ke sath shopping karo, open browsing se bacho.',
  ],
  utilities: [
    'Geyser 20 minute baad band karo — LESCO/WAPDA bill noticeably kam hota hai.',
    'Purani bulbs LED se replace karo — K-Electric bill 40% tak kam ho sakta hai.',
    'Har month SNGPL/SSGC usage check karo aur gas leaks fori fix karo.',
  ],
  health: [
    'Local pharmacy se generic dawai lo — branded se 50% sasti hoti hai.',
    'Routine tests ke liye government hospital labs use karo, cost kam rehti hai.',
    'Health ke liye Rs. 2,000/month alag rakho taake emergency budget na tode.',
  ],
  entertainment: [
    'Netflix/Spotify family plan siblings ke sath share karo — cost 4 hisson mein.',
    'Hafte mein sirf ek paid outing rakho; parks aur ghar ki movie bhi achi hai.',
    'Cinema tickets par bank card offers dekho — HBL/Meezan par 50% off milta hai.',
  ],
  education: [
    'OLX ya campus groups se second-hand books lo — semester mein Rs. 5,000+ bachat.',
    'Mehngi coaching se pehle free YouTube aur Coursera courses try karo.',
    'Month ke start par education budget set karo taake surprise na ho.',
  ],
  other: [
    'Pichle hafte ke transactions review karo aur ek unused subscription cancel karo.',
    'Payday par income ka 10% pehle savings mein rakho — spending se pehle.',
    'HisaabAI mein category budgets banao taake extra kharch control mein rahe.',
  ],
};

const getFallbackTips = (snapshot, language) => {
  const category = snapshot.topCategory in FALLBACK_TIPS_EN ? snapshot.topCategory : 'other';
  const tips = language === 'ur' ? FALLBACK_TIPS_UR[category] : FALLBACK_TIPS_EN[category];
  return tips ?? FALLBACK_TIPS_EN.other;
};

module.exports = { buildUserSnapshot, getFallbackTips };
