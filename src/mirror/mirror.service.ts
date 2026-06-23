import { Injectable } from '@nestjs/common';
import { monthEnd } from '../common/date.helpers';
import { PrismaService } from '../prisma/prisma.service';
import { calcOverspend, mapInvestments, monthsBack } from './mirror.helpers';

const PERIOD_MONTHS: Record<string, number> = {
  '1m': 1,
  '3m': 3,
  '6m': 6,
  '12m': 12,
};

@Injectable()
export class MirrorService {
  constructor(private prisma: PrismaService) {}

  // Calculate overspend vs hypothetical investment returns
  async getMirror(userId: number, period = '1m') {
    const monthCount = PERIOD_MONTHS[period] || 1;
    const monthList = monthsBack(monthCount);
    let totalOverspend = 0;

    for (const monthStart of monthList) {
      const monthEndDate = monthEnd(monthStart);
      const [budgets, transactions] = await Promise.all([
        this.prisma.budget.findMany({
          where: { user_id: userId, month: monthStart },
        }),
        this.prisma.transaction.findMany({
          where: {
            user_id: userId,
            transaction_date: { gte: monthStart, lt: monthEndDate },
          },
        }),
      ]);

      const spendByCategory: Record<string, number> = {};
      for (const txn of transactions) {
        spendByCategory[txn.category] =
          (spendByCategory[txn.category] || 0) + Number(txn.amount);
      }
      totalOverspend += calcOverspend(budgets, spendByCategory);
    }

    const assets = await this.prisma.marketCache.findMany();
    const investments = mapInvestments(assets, totalOverspend, period);
    return { overspend: Math.round(totalOverspend), investments };
  }
}
