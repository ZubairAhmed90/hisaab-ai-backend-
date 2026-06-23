import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLimitDto } from './dto/create-limit.dto';
import { currentMonthRange, sumCategorySpend } from './limits.helpers';

@Injectable()
export class LimitsService {
  constructor(private prisma: PrismaService) {}

  // List limits set by the current user
  async listSet(userId: number) {
    return this.prisma.spendingLimit.findMany({
      where: { owner_id: userId, is_active: true },
      include: { target_user: { select: { id: true, name: true, email: true } } },
    });
  }

  // List limits that apply to the current user with spend progress
  async listMine(userId: number) {
    const limits = await this.prisma.spendingLimit.findMany({
      where: { target_user_id: userId, is_active: true },
      include: { owner: { select: { id: true, name: true } } },
    });
    return Promise.all(
      limits.map(async (limit) => {
        const spent = await sumCategorySpend(this.prisma, userId, limit.category);
        return { ...limit, spent, owner_name: limit.owner.name };
      }),
    );
  }

  // Create a new spending limit
  async create(userId: number, dto: CreateLimitDto) {
    return this.prisma.spendingLimit.create({
      data: {
        owner_id: userId,
        target_user_id: dto.target_user_id ?? userId,
        category: dto.category,
        monthly_limit: dto.monthly_limit,
        alert_at_percent: dto.alert_at_percent ?? 80,
        is_hard_limit: dto.is_hard_limit ?? true,
      },
    });
  }

  // Update limit amount or alert threshold
  async update(userId: number, id: number, data: Partial<CreateLimitDto>) {
    const limit = await this.findOwned(userId, id);
    return this.prisma.spendingLimit.update({
      where: { id: limit.id },
      data: {
        monthly_limit: data.monthly_limit,
        alert_at_percent: data.alert_at_percent,
        is_hard_limit: data.is_hard_limit,
      },
    });
  }

  // Remove a limit set by the current user
  async remove(userId: number, id: number) {
    const limit = await this.findOwned(userId, id);
    await this.prisma.spendingLimit.delete({ where: { id: limit.id } });
    return { deleted: true };
  }

  // Link spouse or partner account by email
  async linkPartner(userId: number, email: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user?.linked_partner_id) {
      throw new BadRequestException('Unlink your current partner before linking a new one');
    }
    const partner = await this.prisma.user.findUnique({ where: { email } });
    if (!partner) throw new NotFoundException('Partner not found');
    if (partner.id === userId) {
      throw new BadRequestException('You cannot link your own account');
    }
    if (partner.linked_partner_id && partner.linked_partner_id !== userId) {
      throw new BadRequestException('This user is already linked to another partner');
    }
    await this.prisma.$transaction([
      this.prisma.user.update({ where: { id: userId }, data: { linked_partner_id: partner.id } }),
      this.prisma.user.update({ where: { id: partner.id }, data: { linked_partner_id: userId } }),
    ]);
    return { linked: true, partner_name: partner.name, partner_id: partner.id };
  }

  // Get partner spending summary by category (no transaction details)
  async partnerSummary(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.linked_partner_id) return null;

    const partnerId = user.linked_partner_id;
    const partner = await this.prisma.user.findUnique({
      where: { id: partnerId },
      select: {
        id: true,
        name: true,
        email: true,
        account_number: true,
        wallet_balance: true,
        account_balance: true,
      },
    });

    const limitsISet = await this.prisma.spendingLimit.findMany({
      where: { owner_id: userId, target_user_id: partnerId, is_active: true },
    });

    const limitsOnMe = await this.prisma.spendingLimit.findMany({
      where: { owner_id: partnerId, target_user_id: userId, is_active: true },
      include: { owner: { select: { name: true } } },
    });

    const limits_i_set = await Promise.all(
      limitsISet.map(async (limit) => {
        const spent = await sumCategorySpend(this.prisma, partnerId, limit.category);
        const cap = Number(limit.monthly_limit);
        return {
          id: limit.id,
          category: limit.category,
          limit: cap,
          spent,
          is_hard_limit: limit.is_hard_limit,
          alert_at_percent: limit.alert_at_percent,
          pct: cap > 0 ? Math.round((spent / cap) * 100) : 0,
          exceeded: spent > cap,
        };
      }),
    );

    const limits_on_me = await Promise.all(
      limitsOnMe.map(async (limit) => {
        const spent = await sumCategorySpend(this.prisma, userId, limit.category);
        const cap = Number(limit.monthly_limit);
        return {
          id: limit.id,
          category: limit.category,
          limit: cap,
          spent,
          is_hard_limit: limit.is_hard_limit,
          owner_name: limit.owner.name,
          pct: cap > 0 ? Math.round((spent / cap) * 100) : 0,
          exceeded: spent > cap,
        };
      }),
    );

    const categories = limits_i_set.map(({ category, limit, spent }) => ({
      category,
      limit,
      spent,
    }));

    return {
      partner_id: partnerId,
      partner_name: partner?.name,
      partner_email: partner?.email,
      partner_account: partner?.account_number,
      partner_wallet: Number(partner?.wallet_balance ?? 0),
      partner_account_balance: Number(partner?.account_balance ?? 0),
      categories,
      limits_i_set,
      limits_on_me,
      stats: {
        limits_set_count: limits_i_set.length,
        limits_on_me_count: limits_on_me.length,
        total_monitored_spend: limits_i_set.reduce((s, r) => s + r.spent, 0),
        categories_exceeded: limits_i_set.filter((r) => r.exceeded).length,
        my_categories_exceeded: limits_on_me.filter((r) => r.exceeded).length,
      },
    };
  }

  async unlinkPartner(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.linked_partner_id) {
      throw new BadRequestException('No partner linked');
    }
    const partnerId = user.linked_partner_id;
    await this.prisma.$transaction([
      this.prisma.user.update({ where: { id: userId }, data: { linked_partner_id: null } }),
      this.prisma.user.update({ where: { id: partnerId }, data: { linked_partner_id: null } }),
    ]);
    return { unlinked: true };
  }

  // Check if a transaction would exceed an active spending limit
  async checkLimitBeforeSave(userId: number, category: string, amount: number) {
    const limits = await this.prisma.spendingLimit.findMany({
      where: { target_user_id: userId, category, is_active: true },
      include: { owner: { select: { name: true } } },
    });
    if (!limits.length) return { allowed: true, message: '' };

    const currentSpend = await sumCategorySpend(this.prisma, userId, category);
    const total = currentSpend + amount;

    for (const limit of limits) {
      const cap = Number(limit.monthly_limit);
      const owner = limit.owner.name;
      if (total > cap && limit.is_hard_limit) {
        return {
          allowed: false,
          message: `${limit.category} limit of Rs. ${cap} set by ${owner} reached`,
        };
      }
      if (total >= cap * (limit.alert_at_percent / 100)) {
        return {
          allowed: true,
          message: `Warning: ${Math.round((total / cap) * 100)}% of ${limit.category} limit reached`,
        };
      }
    }
    return { allowed: true, message: '' };
  }

  // Find a limit owned by the user
  private async findOwned(userId: number, id: number) {
    const limit = await this.prisma.spendingLimit.findFirst({
      where: { id, owner_id: userId },
    });
    if (!limit) throw new NotFoundException('Limit not found');
    return limit;
  }
}
