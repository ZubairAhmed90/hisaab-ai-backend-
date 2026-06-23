import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CATALOG_BY_TICKER,
  STOCK_CATALOG,
  catalogToMarketEntry,
  simulateNextPrice,
} from './stock.catalog';
import { defaultTbill, fetchGoldPrice } from './market.helpers';

@Injectable()
export class MarketService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    await this.ensureCatalogSeeded();
    const count = await this.prisma.marketCache.count({ where: { asset_type: 'stock' } });
    if (count < STOCK_CATALOG.length) await this.simulatePrices();
  }

  async cachePrice(entry: {
    asset_type: string;
    ticker: string;
    price_pkr: number;
    change_1d?: number;
    change_30d?: number;
  }) {
    return this.prisma.marketCache.upsert({
      where: {
        asset_type_ticker: {
          asset_type: entry.asset_type,
          ticker: entry.ticker,
        },
      },
      update: { ...entry, fetched_at: new Date() },
      create: { ...entry, fetched_at: new Date() },
    });
  }

  /** Seed all 20 catalog stocks into market_cache if missing */
  async ensureCatalogSeeded() {
    for (const stock of STOCK_CATALOG) {
      const existing = await this.prisma.marketCache.findUnique({
        where: { asset_type_ticker: { asset_type: 'stock', ticker: stock.ticker } },
      });
      if (!existing) await this.cachePrice(catalogToMarketEntry(stock));
    }
  }

  /** Simulate realistic price movement for all catalog stocks */
  async simulatePrices() {
    const updated = [];
    for (const stock of STOCK_CATALOG) {
      const cached = await this.prisma.marketCache.findUnique({
        where: { asset_type_ticker: { asset_type: 'stock', ticker: stock.ticker } },
      });
      const prev = cached ? Number(cached.price_pkr) : stock.base_price;
      const { price_pkr, change_1d } = simulateNextPrice(prev, stock.base_price);
      updated.push(
        await this.cachePrice({
          asset_type: 'stock',
          ticker: stock.ticker,
          price_pkr,
          change_1d,
          change_30d: change_1d,
        }),
      );
    }
    return updated;
  }

  async refreshPrices() {
    await this.simulatePrices();
    const updated = [];
    try {
      updated.push(await this.cachePrice(await fetchGoldPrice()));
    } catch {
      /* keep cached gold */
    }
    updated.push(await this.cachePrice(defaultTbill()));
    return updated;
  }

  async getAll() {
    await this.ensureCatalogSeeded();
    return this.prisma.marketCache.findMany({ orderBy: { asset_type: 'asc' } });
  }

  async getByType(assetType: string) {
    if (assetType === 'stock') await this.ensureCatalogSeeded();
    return this.prisma.marketCache.findMany({ where: { asset_type: assetType } });
  }

  async getStockPrice(ticker: string): Promise<number> {
    const upper = ticker.toUpperCase();
    const meta = CATALOG_BY_TICKER[upper];
    if (!meta) throw new Error(`Unknown ticker: ${ticker}`);

    const cached = await this.prisma.marketCache.findUnique({
      where: { asset_type_ticker: { asset_type: 'stock', ticker: upper } },
    });
    return cached ? Number(cached.price_pkr) : meta.base_price;
  }

  getCatalog() {
    return STOCK_CATALOG;
  }
}
