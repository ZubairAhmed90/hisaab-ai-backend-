import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { LimitsModule } from '../limits/limits.module';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [AiModule, LimitsModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
