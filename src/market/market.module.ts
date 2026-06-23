import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketScheduler } from './market.scheduler';
import { MarketService } from './market.service';

@Module({
  controllers: [MarketController],
  providers: [MarketService, MarketScheduler],
  exports: [MarketService],
})
export class MarketModule {}
