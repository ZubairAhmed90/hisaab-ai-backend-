const { query, queryOne } = require('../config/db');

const MarketModel = {
  findByTypeAndTicker: (asset_type, ticker) =>
    queryOne(
      'SELECT * FROM market_cache WHERE asset_type = ? AND ticker = ?',
      [asset_type, ticker],
    ),

  findAll: () =>
    query('SELECT * FROM market_cache ORDER BY asset_type ASC'),

  findByType: (asset_type) =>
    query('SELECT * FROM market_cache WHERE asset_type = ?', [asset_type]),

  countByType: (asset_type) =>
    query('SELECT COUNT(*) AS count FROM market_cache WHERE asset_type = ?', [asset_type])
      .then(([r]) => Number(r.count)),

  upsert: (entry) =>
    query(
      `INSERT INTO market_cache (asset_type, ticker, price_pkr, change_1d, change_30d, fetched_at)
       VALUES (?, ?, ?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE
         price_pkr  = VALUES(price_pkr),
         change_1d  = VALUES(change_1d),
         change_30d = VALUES(change_30d),
         fetched_at = NOW()`,
      [
        entry.asset_type,
        entry.ticker,
        entry.price_pkr,
        entry.change_1d ?? 0,
        entry.change_30d ?? 0,
      ],
    ).then(() => MarketModel.findByTypeAndTicker(entry.asset_type, entry.ticker)),
};

module.exports = MarketModel;
