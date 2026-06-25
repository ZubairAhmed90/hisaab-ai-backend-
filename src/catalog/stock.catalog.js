const STOCK_CATALOG = [
  { ticker: 'OGDC', display_name: 'Oil & Gas Dev.', base_price: 198.4, sector: 'Energy' },
  { ticker: 'PPL', display_name: 'Pakistan Petroleum', base_price: 165.2, sector: 'Energy' },
  { ticker: 'HBL', display_name: 'Habib Bank Ltd', base_price: 142.1, sector: 'Banking' },
  { ticker: 'MCB', display_name: 'MCB Bank', base_price: 185.5, sector: 'Banking' },
  { ticker: 'UBL', display_name: 'United Bank', base_price: 178.3, sector: 'Banking' },
  { ticker: 'LUCK', display_name: 'Lucky Cement', base_price: 720.0, sector: 'Cement' },
  { ticker: 'GATM', display_name: 'Gul Ahmed Textile', base_price: 48.5, sector: 'Textile' },
  { ticker: 'ENGRO', display_name: 'Engro Corp', base_price: 312.75, sector: 'Conglomerate' },
  { ticker: 'FFC', display_name: 'Fauji Fertilizer', base_price: 118.6, sector: 'Fertilizer' },
  { ticker: 'MTL', display_name: 'Millat Tractors', base_price: 890.0, sector: 'Auto' },
  { ticker: 'TRG', display_name: 'TRG Pakistan', base_price: 95.4, sector: 'Technology' },
  { ticker: 'HUBC', display_name: 'Hub Power Co.', base_price: 152.8, sector: 'Power' },
  { ticker: 'MARI', display_name: 'Mari Petroleum', base_price: 2150.0, sector: 'Energy' },
  { ticker: 'EFERT', display_name: 'Engro Fertilizers', base_price: 98.2, sector: 'Fertilizer' },
  { ticker: 'SEARL', display_name: 'The Searle Co.', base_price: 72.5, sector: 'Pharma' },
  { ticker: 'COLG', display_name: 'Colgate-Palmolive', base_price: 1450.0, sector: 'FMCG' },
  { ticker: 'NESTLE', display_name: 'Nestle Pakistan', base_price: 7800.0, sector: 'FMCG' },
  { ticker: 'AGTL', display_name: 'Al-Ghazi Tractors', base_price: 520.0, sector: 'Auto' },
  { ticker: 'FATIMA', display_name: 'Fatima Fertilizer', base_price: 105.3, sector: 'Fertilizer' },
  { ticker: 'PSO', display_name: 'Pakistan State Oil', base_price: 425.0, sector: 'Energy' },
];

const CATALOG_BY_TICKER = Object.fromEntries(STOCK_CATALOG.map((s) => [s.ticker, s]));

function simulateNextPrice(currentPrice, basePrice) {
  const floor = basePrice * 0.65;
  const ceiling = basePrice * 1.45;
  const volatility = 0.004 + Math.random() * 0.014;
  const drift = (Math.random() - 0.48) * volatility;
  let next = currentPrice * (1 + drift);
  next = Math.min(ceiling, Math.max(floor, next));
  next = Math.round(next * 100) / 100;
  const change_1d = currentPrice > 0 ? ((next - currentPrice) / currentPrice) * 100 : 0;
  return { price_pkr: next, change_1d: Math.round(change_1d * 100) / 100 };
}

function catalogToMarketEntry(stock) {
  return {
    asset_type: 'stock',
    ticker: stock.ticker,
    price_pkr: stock.base_price,
    change_1d: 0,
    change_30d: 0,
  };
}

module.exports = { STOCK_CATALOG, CATALOG_BY_TICKER, simulateNextPrice, catalogToMarketEntry };
