const MarketModel = require('../models/market.model');
const { STOCK_CATALOG, CATALOG_BY_TICKER, simulateNextPrice, catalogToMarketEntry } = require('../catalog/stock.catalog');
const { fetchGoldPrice, defaultTbill } = require('../helpers/market.helpers');

const ensureCatalogSeeded = async () => {
  for (const stock of STOCK_CATALOG) {
    const existing = await MarketModel.findByTypeAndTicker('stock', stock.ticker);
    if (!existing) await MarketModel.upsert(catalogToMarketEntry(stock));
  }
};

const simulatePrices = async () => {
  const updated = [];
  for (const stock of STOCK_CATALOG) {
    const cached = await MarketModel.findByTypeAndTicker('stock', stock.ticker);
    const prev = cached ? Number(cached.price_pkr) : stock.base_price;
    const { price_pkr, change_1d } = simulateNextPrice(prev, stock.base_price);
    updated.push(await MarketModel.upsert({ asset_type: 'stock', ticker: stock.ticker, price_pkr, change_1d, change_30d: change_1d }));
  }
  return updated;
};

const refreshPrices = async () => {
  await simulatePrices();
  const updated = [];
  try {
    updated.push(await MarketModel.upsert(await fetchGoldPrice()));
  } catch { /* keep cached gold */ }
  updated.push(await MarketModel.upsert(defaultTbill()));
  return updated;
};

const getAll = async () => {
  await ensureCatalogSeeded();
  return MarketModel.findAll();
};

const getByType = async (assetType) => {
  if (assetType === 'stock') await ensureCatalogSeeded();
  return MarketModel.findByType(assetType);
};

const getStockPrice = async (ticker) => {
  const upper = ticker.toUpperCase();
  const meta = CATALOG_BY_TICKER[upper];
  if (!meta) throw new Error(`Unknown ticker: ${ticker}`);
  const cached = await MarketModel.findByTypeAndTicker('stock', upper);
  return cached ? Number(cached.price_pkr) : meta.base_price;
};

const getCatalog = () => STOCK_CATALOG;

const initMarketCache = async () => {
  try {
    await ensureCatalogSeeded();
    const count = await MarketModel.countByType('stock');
    if (count < STOCK_CATALOG.length) await simulatePrices();
  } catch (e) {
    console.warn('[MarketService] initMarketCache failed:', e);
  }
};

module.exports = { ensureCatalogSeeded, simulatePrices, refreshPrices, getAll, getByType, getStockPrice, getCatalog, initMarketCache };
