import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { generateUniqueAccountNumber } from '../auth/auth.helpers';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  onModuleInit() {
    setTimeout(() => {
      void this.initAdmin();
    }, 2000);
  }

  private async initAdmin() {
    try {
      await this.backfillAccountNumbers();
      await this.ensureAdminUser();
    } catch (e) {
      console.warn('[AdminService] initAdmin failed:', e);
    }
  }

  async backfillAccountNumbers() {
    const users = await this.prisma.user.findMany({
      where: { OR: [{ account_number: null }, { account_number: '' }] },
    });

    for (const user of users) {
      const account_number = await generateUniqueAccountNumber(this.prisma);
      await this.prisma.user.update({
        where: { id: user.id },
        data: { account_number },
      });
    }
  }

  async ensureAdminUser() {
    const email = process.env.ADMIN_EMAIL || 'admin@hisaab.ai';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    let user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      const account_number = await generateUniqueAccountNumber(this.prisma);
      await this.prisma.user.create({
        data: {
          name: 'Admin',
          email,
          password_hash: await bcrypt.hash(password, 10),
          account_number,
          is_admin: true,
          wallet_balance: 0,
        },
      });
      return;
    }
    if (!user.is_admin) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { is_admin: true },
      });
    }
    if (!user.account_number) {
      const account_number = await generateUniqueAccountNumber(this.prisma);
      await this.prisma.user.update({
        where: { id: user.id },
        data: { account_number },
      });
    }
  }

  async listUsers() {
    const users = await this.prisma.user.findMany({
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        account_number: true,
        name: true,
        email: true,
        phone: true,
        wallet_balance: true,
        account_balance: true,
        monthly_income: true,
        is_admin: true,
        created_at: true,
        last_login: true,
        _count: { select: { holdings: true } },
      },
    });

    return users.map((u) => ({
      id: u.id,
      account_number: u.account_number,
      name: u.name,
      email: u.email,
      phone: u.phone,
      wallet_balance: Number(u.wallet_balance),
      account_balance: Number(u.account_balance),
      monthly_income: Number(u.monthly_income),
      is_admin: u.is_admin,
      holdings_count: u._count.holdings,
      created_at: u.created_at,
      last_login: u.last_login,
    }));
  }

  async creditWallet(userId: number, amount: number, note?: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const updated = await this.prisma.$transaction(async (tx) => {
      const u = await tx.user.update({
        where: { id: userId },
        data: { wallet_balance: { increment: amount } },
      });

      await tx.transaction.create({
        data: {
          user_id: userId,
          amount,
          description: note || 'Admin wallet credit',
          category: 'income',
          transaction_date: new Date(),
          source: 'admin_credit',
          merchant: 'HisaabAI Admin',
        },
      });

      return u;
    });

    return {
      id: updated.id,
      account_number: updated.account_number,
      name: updated.name,
      wallet_balance: Number(updated.wallet_balance),
    };
  }
}
