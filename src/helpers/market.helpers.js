const axios = require('axios');

const fetchGoldPrice = async () => {
  const url = 'https://www.goldapi.io/api/XAU/PKR';
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

const defaultTbill = () => ({
  asset_type: 'tbill',
  ticker: 'TBILL',
  price_pkr: 21.5,
  change_1d: 0,
  change_30d: 0.5,
});

module.exports = { fetchGoldPrice, defaultTbill };
