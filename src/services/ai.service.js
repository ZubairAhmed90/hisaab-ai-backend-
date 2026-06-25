const axios = require('axios');
const { buildUserSnapshot, getFallbackTips } = require('../helpers/ai.helpers');
const { getFallbackReportSummary } = require('../helpers/reports.helpers');
const { CATEGORIZE_PROMPT, ADVISOR_PROMPT, DAILY_TIP_PROMPT, REPORT_PROMPT } = require('../prompts/prompts');

const askGroq = async (systemPrompt, userMessage) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY is not configured');

  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      max_tokens: 300,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    },
    { headers: { Authorization: `Bearer ${apiKey}` } },
  );
  return response.data.choices[0].message.content.trim();
};

const categorize = async (description) => {
  try {
    const result = await askGroq(CATEGORIZE_PROMPT, description);
    return result.toLowerCase();
  } catch {
    return 'other';
  }
};

const chat = async (userId, message, language) => {
  const snapshot = await buildUserSnapshot(userId);
  const prompt = ADVISOR_PROMPT({ ...snapshot, language });
  try {
    const reply = await askGroq(prompt, message);
    return { reply, language, aiPowered: true };
  } catch (error) {
    console.warn('[AI] Chat fallback used:', error.message);
    const fallback =
      language === 'ur'
        ? `Abhi AI connect nahi ho raha. Aap ne is month Rs. ${snapshot.totalSpent} kharch kiye hain. Top category: ${snapshot.topCategory}. Budget set karo aur roz HisaabAI mein log karo.`
        : `I'm temporarily offline. You've spent Rs. ${snapshot.totalSpent} this month with ${snapshot.topCategory} as your top category. Set a budget and log daily in HisaabAI to stay on track.`;
    return { reply: fallback, language, aiPowered: false };
  }
};

const getTips = async (userId, language) => {
  const snapshot = await buildUserSnapshot(userId);
  try {
    const tips = await Promise.all(
      [0, 1, 2].map(() =>
        askGroq(DAILY_TIP_PROMPT(snapshot.topCategory, snapshot.topAmount, language), 'Give me a tip'),
      ),
    );
    return { category: snapshot.topCategory, tips, aiPowered: true };
  } catch (error) {
    console.warn('[AI] Tips fallback used:', error.message);
    return {
      category: snapshot.topCategory,
      tips: getFallbackTips(snapshot, language),
      aiPowered: false,
    };
  }
};

const reportSummary = async (data) => {
  try {
    return await askGroq(REPORT_PROMPT(data), 'Write the summary');
  } catch (error) {
    console.warn('[AI] Report fallback used:', error.message);
    return getFallbackReportSummary(data);
  }
};

module.exports = { askGroq, categorize, chat, getTips, reportSummary };
