import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketScheduler } from './market.scheduler';
import { MarketService } from './market.service';

const cronProviders =
  process.env.DISABLE_CRON !== 'true' ? [MarketScheduler] : [];

@Module({
  controllers: [MarketController],
  providers: [MarketService, ...cronProviders],
  exports: [MarketService],
})
export class MarketModule {}
