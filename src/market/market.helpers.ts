import axios from 'axios';

const STOCK_TICKERS = ['OGDC.KA', 'PPL.KA', 'HBL.KA', 'MCB.KA', 'LUCK.KA', 'GATM.KA', 'ENGRO.KA'];

// Fetch stock quotes from Yahoo Finance API
export const fetchYahooStocks = async () => {
  const results = [];
  for (const ticker of STOCK_TICKERS) {
    const symbol = ticker.replace('.KA', '');
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`;
    const { data } = await axios.get(url, { timeout: 8000 });
    const meta = data.chart.result[0].meta;
    results.push({
      asset_type: 'stock',
      ticker: symbol,
      price_pkr: meta.regularMarketPrice,
      change_1d: meta.regularMarketChangePercent,
      change_30d: meta.regularMarketChangePercent,
    });
  }
  return results;
};

// Fetch gold price in PKR from Gold API
export const fetchGoldPrice = async () => {
  const url = `https://www.goldapi.io/api/XAU/PKR`;
  const { data } = await axios.get(url, {
    headers: { 'x-access-token': process.env.GOLD_API_KEY },
    timeout: 8000,
  });
  return {
    asset_type: 'gold',
    ticker: 'XAU',
    price_pkr: data.price,
    change_1d: data.chp || 0,
    change_30d: data.chp || 0,
  };
};

// Return default T-bill rate data when live fetch is unavailable
export const defaultTbill = () => ({
  asset_type: 'tbill',
  ticker: 'TBILL',
  price_pkr: 21.5,
  change_1d: 0,
  change_30d: 0.5,
});
