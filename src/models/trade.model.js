const { query } = require('../config/db');

const TradeModel = {
  findByUser: (userId, limit = 20) =>
    query(
      'SELECT * FROM stock_trades WHERE user_id = ? ORDER BY created_at DESC LIMIT ?',
      [userId, limit],
    ),

  create: (conn, data) =>
    conn.execute(
      'INSERT INTO stock_trades (user_id, ticker, display_name, side, quantity, price_pkr, total_pkr) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        data.user_id,
        data.ticker,
        data.display_name,
        data.side,
        data.quantity,
        data.price_pkr,
        data.total_pkr,
      ],
    ),
};

module.exports = TradeModel;
