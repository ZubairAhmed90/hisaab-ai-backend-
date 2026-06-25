const { query, queryOne } = require('../config/db');

const TransactionModel = {
  findById: (id) =>
    queryOne('SELECT * FROM transactions WHERE id = ?', [id]),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM transactions WHERE id = ? AND user_id = ?', [id, userId]),

  findMany: (userId, { limit = 20, offset = 0 } = {}) =>
    query(
      'SELECT * FROM transactions WHERE user_id = ? ORDER BY transaction_date DESC LIMIT ? OFFSET ?',
      [userId, limit, offset],
    ),

  count: (userId) =>
    query('SELECT COUNT(*) AS total FROM transactions WHERE user_id = ?', [userId])
      .then(([r]) => Number(r.total)),

  findByDateRange: (userId, start, end) =>
    query(
      'SELECT * FROM transactions WHERE user_id = ? AND transaction_date >= ? AND transaction_date < ?',
      [userId, start, end],
    ),

  findByCategoryAndDateRange: (userId, category, start, end) =>
    query(
      'SELECT amount FROM transactions WHERE user_id = ? AND category = ? AND transaction_date >= ? AND transaction_date < ?',
      [userId, category, start, end],
    ),

  countByUser: (userId) =>
    query('SELECT COUNT(*) AS count FROM transactions WHERE user_id = ?', [userId])
      .then(([r]) => Number(r.count)),

  create: async (conn, data) => {
    const [result] = await conn.execute(
      `INSERT INTO transactions (user_id, amount, description, category, merchant, transaction_date, source)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.amount,
        data.description,
        data.category || 'other',
        data.merchant || null,
        data.transaction_date,
        data.source || 'manual',
      ],
    );
    const [[row]] = await conn.execute('SELECT * FROM transactions WHERE id = ?', [result.insertId]);
    return row;
  },

  createDirect: async (data) => {
    const result = await query(
      `INSERT INTO transactions (user_id, amount, description, category, merchant, transaction_date, source)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.amount,
        data.description,
        data.category || 'other',
        data.merchant || null,
        data.transaction_date,
        data.source || 'manual',
      ],
    );
    return TransactionModel.findById(result.insertId);
  },

  updateCategory: async (id, category) => {
    await query('UPDATE transactions SET category = ?, user_corrected = 1 WHERE id = ?', [category, id]);
    return TransactionModel.findById(id);
  },

  delete: (id) =>
    query('DELETE FROM transactions WHERE id = ?', [id]),
};

module.exports = TransactionModel;
