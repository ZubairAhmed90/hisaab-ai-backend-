const { query, queryOne } = require('../config/db');

const HoldingModel = {
  findById: (id) =>
    queryOne('SELECT * FROM user_holdings WHERE id = ?', [id]),

  findByUserAndTicker: (userId, ticker) =>
    queryOne('SELECT * FROM user_holdings WHERE user_id = ? AND ticker = ?', [userId, ticker]),

  findByUserAndTickerTx: async (conn, userId, ticker) => {
    const [[row]] = await conn.execute(
      'SELECT * FROM user_holdings WHERE user_id = ? AND ticker = ?',
      [userId, ticker],
    );
    return row || null;
  },

  findByUser: (userId) =>
    query('SELECT * FROM user_holdings WHERE user_id = ? ORDER BY ticker ASC', [userId]),

  create: (conn, data) =>
    conn.execute(
      'INSERT INTO user_holdings (user_id, ticker, display_name, quantity, avg_cost_pkr) VALUES (?, ?, ?, ?, ?)',
      [data.user_id, data.ticker, data.display_name, data.quantity, data.avg_cost_pkr],
    ),

  updateQuantityAndAvg: (conn, id, quantity, avg_cost_pkr) =>
    conn.execute(
      'UPDATE user_holdings SET quantity = ?, avg_cost_pkr = ? WHERE id = ?',
      [quantity, avg_cost_pkr, id],
    ),

  updateQuantity: (conn, id, quantity) =>
    conn.execute('UPDATE user_holdings SET quantity = ? WHERE id = ?', [quantity, id]),

  delete: (conn, id) =>
    conn.execute('DELETE FROM user_holdings WHERE id = ?', [id]),
};

module.exports = HoldingModel;
