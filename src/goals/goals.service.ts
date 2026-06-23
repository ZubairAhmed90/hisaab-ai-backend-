import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  // List all goals for a user with progress percentage
  async list(userId: number) {
    const goals = await this.prisma.goal.findMany({
      where: { user_id: userId },
      orderBy: { deadline: 'asc' },
    });
    return goals.map((goal) => this.withProgress(goal));
  }

  // Create a new savings goal
  async create(userId: number, dto: CreateGoalDto) {
    const goal = await this.prisma.goal.create({
      data: {
        user_id: userId,
        title: dto.title,
        target_amount: dto.target_amount,
        deadline: new Date(dto.deadline),
      },
    });
    return this.withProgress(goal);
  }

  // Update saved amount on a goal
  async update(userId: number, id: number, savedAmount: number) {
    const goal = await this.findOwned(userId, id);
    const updated = await this.prisma.goal.update({
      where: { id: goal.id },
      data: { saved_amount: savedAmount },
    });
    return this.withProgress(updated);
  }

  // Delete a user goal
  async remove(userId: number, id: number) {
    const goal = await this.findOwned(userId, id);
    await this.prisma.goal.delete({ where: { id: goal.id } });
    return { deleted: true };
  }

  // Find a goal owned by the user
  private async findOwned(userId: number, id: number) {
    const goal = await this.prisma.goal.findFirst({ where: { id, user_id: userId } });
    if (!goal) throw new NotFoundException('Goal not found');
    return goal;
  }

  // Attach progress percentage and days remaining to a goal
  private withProgress(goal: {
    id: number;
    title: string;
    target_amount: unknown;
    saved_amount: unknown;
    deadline: Date;
    status: string;
  }) {
    const target = Number(goal.target_amount);
    const saved = Number(goal.saved_amount);
    const progress = target > 0 ? Math.round((saved / target) * 100) : 0;
    const daysLeft = Math.ceil((goal.deadline.getTime() - Date.now()) / 86400000);
    return { ...goal, progress, days_left: daysLeft };
  }
}
