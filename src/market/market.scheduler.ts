import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MarketService } from './market.service';

@Injectable()
export class MarketScheduler {
  private readonly logger = new Logger(MarketScheduler.name);

  constructor(private marketService: MarketService) {}

  /** Tick stock prices every 3 minutes for realistic movement */
  @Cron('*/3 * * * *')
  async tickStocks() {
    this.logger.log('Simulating stock price ticks...');
    await this.marketService.simulatePrices();
  }

  /** Refresh gold/tbill every 15 minutes */
  @Cron('*/15 * * * *')
  async refreshOtherAssets() {
    try {
      await this.marketService.refreshPrices();
    } catch (e) {
      this.logger.warn('Asset refresh failed', e);
    }
  }
}
