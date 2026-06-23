import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AdminModule } from './admin/admin.module';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';
import { BudgetsModule } from './budgets/budgets.module';
import { GoalsModule } from './goals/goals.module';
import { LimitsModule } from './limits/limits.module';
import { MarketModule } from './market/market.module';
import { MirrorModule } from './mirror/mirror.module';
import { OffersModule } from './offers/offers.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReportsModule } from './reports/reports.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AdminModule,
    AuthModule,
    TransactionsModule,
    AiModule,
    MarketModule,
    MirrorModule,
    BudgetsModule,
    GoalsModule,
    LimitsModule,
    ReportsModule,
    OffersModule,
    PortfolioModule,
  ],
})
export class AppModule {}
