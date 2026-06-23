import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';
import { buildUserSnapshot, getFallbackTips } from './ai.helpers';
import { getFallbackReportSummary } from '../reports/reports.helpers';
import {
  ADVISOR_PROMPT,
  CATEGORIZE_PROMPT,
  DAILY_TIP_PROMPT,
  REPORT_PROMPT,
} from './prompts';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  constructor(private prisma: PrismaService) {}

  // Call Groq API with a system prompt and user message
  async askGroq(systemPrompt: string, userMessage: string): Promise<string> {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ_API_KEY is not configured');
    }

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
  }

  // Categorize a transaction description using AI
  async categorize(description: string): Promise<string> {
    try {
      const result = await this.askGroq(CATEGORIZE_PROMPT, description);
      return result.toLowerCase();
    } catch {
      return 'other';
    }
  }

  // Generate a personalized financial chat response
  async chat(userId: number, message: string, language: string) {
    const snapshot = await buildUserSnapshot(this.prisma, userId);
    const prompt = ADVISOR_PROMPT({ ...snapshot, language });

    try {
      const reply = await this.askGroq(prompt, message);
      return { reply, language, aiPowered: true };
    } catch (error) {
      this.logger.warn(`Chat fallback used: ${(error as Error).message}`);
      const fallback =
        language === 'ur'
          ? `Abhi AI connect nahi ho raha. Aap ne is month Rs. ${snapshot.totalSpent} kharch kiye hain. Top category: ${snapshot.topCategory}. Budget set karo aur roz HisaabAI mein log karo.`
          : `I'm temporarily offline. You've spent Rs. ${snapshot.totalSpent} this month with ${snapshot.topCategory} as your top category. Set a budget and log daily in HisaabAI to stay on track.`;
      return { reply: fallback, language, aiPowered: false };
    }
  }

  // Return 3 AI-generated saving tips for top spending category
  async getTips(userId: number, language: string) {
    const snapshot = await buildUserSnapshot(this.prisma, userId);

    try {
      const tips = await Promise.all(
        [0, 1, 2].map(() =>
          this.askGroq(
            DAILY_TIP_PROMPT(snapshot.topCategory, snapshot.topAmount, language),
            'Give me a tip',
          ),
        ),
      );
      return { category: snapshot.topCategory, tips, aiPowered: true };
    } catch (error) {
      this.logger.warn(`Tips fallback used: ${(error as Error).message}`);
      return {
        category: snapshot.topCategory,
        tips: getFallbackTips(snapshot, language),
        aiPowered: false,
      };
    }
  }

  // Generate monthly report summary text via AI
  async reportSummary(data: {
    grade: string;
    budgetScore: number;
    savingsScore: number;
    topOverspend: string;
    improvement: string;
    language: string;
  }) {
    try {
      return await this.askGroq(REPORT_PROMPT(data), 'Write the summary');
    } catch (error) {
      this.logger.warn(`Report AI fallback: ${(error as Error).message}`);
      return getFallbackReportSummary(data);
    }
  }
}
