import { Injectable, NotFoundException } from '@nestjs/common';
import { monthEnd, parseMonth } from '../common/date.helpers';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  // List budgets with current month spend vs limit
  async list(userId: number) {
    const monthStart = parseMonth();
    const budgets = await this.prisma.budget.findMany({
      where: { user_id: userId, month: monthStart },
    });
    const transactions = await this.prisma.transaction.findMany({
      where: {
        user_id: userId,
        transaction_date: { gte: monthStart, lt: monthEnd(monthStart) },
      },
    });

    const spendMap: Record<string, number> = {};
    for (const txn of transactions) {
      spendMap[txn.category] = (spendMap[txn.category] || 0) + Number(txn.amount);
    }

    return budgets.map((budget) => ({
      ...budget,
      spent: spendMap[budget.category] || 0,
      remaining: Number(budget.monthly_limit) - (spendMap[budget.category] || 0),
    }));
  }

  // Create a budget for the current month
  async create(userId: number, dto: CreateBudgetDto) {
    return this.prisma.budget.create({
      data: {
        user_id: userId,
        category: dto.category,
        monthly_limit: dto.monthly_limit,
        month: parseMonth(),
      },
    });
  }

  // Update a budget's monthly limit
  async update(userId: number, id: number, dto: UpdateBudgetDto) {
    const budget = await this.findOwned(userId, id);
    return this.prisma.budget.update({
      where: { id: budget.id },
      data: { monthly_limit: dto.monthly_limit },
    });
  }

  // Delete a user budget
  async remove(userId: number, id: number) {
    const budget = await this.findOwned(userId, id);
    await this.prisma.budget.delete({ where: { id: budget.id } });
    return { deleted: true };
  }

  // Find a budget that belongs to the user
  private async findOwned(userId: number, id: number) {
    const budget = await this.prisma.budget.findFirst({
      where: { id, user_id: userId },
    });
    if (!budget) throw new NotFoundException('Budget not found');
    return budget;
  }
}
