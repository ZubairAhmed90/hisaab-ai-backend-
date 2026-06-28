const { query } = require('../config/db');
const { formatTrade } = require('../helpers/balance.helpers');

const TradeModel = {
  findByUser: (userId, limit = 20) =>
    query(
      'SELECT * FROM stock_trades WHERE user_id = ? ORDER BY created_at DESC LIMIT ?',
      [userId, limit],
    ).then((rows) => rows.map(formatTrade)),

  findByUserAndTicker: (userId, ticker, { limit = 50, days } = {}) => {
    const params = [userId, ticker.toUpperCase()];
    let sql = 'SELECT * FROM stock_trades WHERE user_id = ? AND ticker = ?';
    if (days) {
      sql += ' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)';
      params.push(Number(days));
    }
    sql += ' ORDER BY created_at DESC LIMIT ?';
    params.push(limit);
    return query(sql, params).then((rows) => rows.map(formatTrade));
  },

  create: async (conn, data) => {
    const [result] = await conn.execute(
      `INSERT INTO stock_trades (user_id, ticker, display_name, side, quantity, price_pkr, total_pkr,
        wallet_balance_before, wallet_balance_after)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.ticker,
        data.display_name,
        data.side,
        data.quantity,
        data.price_pkr,
        data.total_pkr,
        data.wallet_balance_before ?? null,
        data.wallet_balance_after ?? null,
      ],
    );
    const [[row]] = await conn.execute('SELECT * FROM stock_trades WHERE id = ?', [result.insertId]);
    return formatTrade(row);
  },
};

module.exports = TradeModel;
