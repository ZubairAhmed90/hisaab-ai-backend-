import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AiService } from '../ai/ai.service';
import { monthEnd, parseMonth } from '../common/date.helpers';
import { PrismaService } from '../prisma/prisma.service';
import {
  calcBudgetScore,
  calcSavingsScore,
  getFallbackReportSummary,
  scoreToGrade,
  weightedScore,
} from './reports.helpers';

@Injectable()
export class ReportsService {
  private readonly logger = new Logger(ReportsService.name);

  constructor(
    private prisma: PrismaService,
    private aiService: AiService,
  ) {}

  // Find cached report — exact match first, then calendar month fallback
  private async findCachedReport(userId: number, month?: string) {
    const monthStart = parseMonth(month);

    const exact = await this.prisma.reportCard.findUnique({
      where: { user_id_month: { user_id: userId, month: monthStart } },
    });
    if (exact) return exact;

    if (month) {
      const [year, mon] = month.split('-').map(Number);
      const reports = await this.prisma.reportCard.findMany({
        where: { user_id: userId },
        orderBy: { month: 'desc' },
      });
      return (
        reports.find((report) => {
          const d = new Date(report.month);
          return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === mon;
        }) ?? null
      );
    }

    return this.prisma.reportCard.findFirst({
      where: {
        user_id: userId,
        month: { gte: monthStart, lt: monthEnd(monthStart) },
      },
    });
  }

  // Generate or return cached monthly financial report card
  async getMonthly(userId: number, month?: string) {
    const cached = await this.findCachedReport(userId, month);
    if (cached) return cached;

    const monthStart = parseMonth(month);
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const income = Number(user?.monthly_income || 0);
    const language = user?.preferred_language || 'en';

    const transactions = await this.prisma.transaction.findMany({
      where: {
        user_id: userId,
        transaction_date: { gte: monthStart, lt: monthEnd(monthStart) },
      },
    });
    const budgets = await this.prisma.budget.findMany({
      where: { user_id: userId, month: monthStart },
    });

    const spendMap: Record<string, number> = {};
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
    const overall = weightedScore({
      budget: budgetScore,
      savings: savingsScore,
      trend: trendScore,
      debt: debtScore,
      emergency: emergencyScore,
    });

    const topCategory =
      Object.entries(spendMap)
        .filter(([cat]) => cat !== 'income')
        .sort((a, b) => b[1] - a[1])[0]?.[0] || 'none';

    const grade = scoreToGrade(overall);
    const summaryInput = {
      grade,
      budgetScore,
      savingsScore,
      topOverspend: topCategory,
      improvement: 'stable',
      language,
    };

    let summary: string;
    try {
      summary = await this.aiService.reportSummary(summaryInput);
    } catch (error) {
      this.logger.warn(`Report summary fallback used: ${(error as Error).message}`);
      summary = getFallbackReportSummary(summaryInput);
    }

    const reportData = {
      overall_grade: grade,
      budget_score: budgetScore,
      savings_score: savingsScore,
      trend_score: trendScore,
      summary_en: summary,
    };

    try {
      return await this.prisma.reportCard.create({
        data: { user_id: userId, month: monthStart, ...reportData },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const existing = await this.findCachedReport(userId, month);
        if (existing) return existing;
      }
      throw error;
    }
  }
}
