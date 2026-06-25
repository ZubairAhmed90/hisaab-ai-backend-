const { query, queryOne } = require('../config/db');

const BillPaymentModel = {
  listForUser: (userId, limit = 30) =>
    query(
      `SELECT * FROM bill_payments WHERE user_id = ? ORDER BY paid_at DESC LIMIT ?`,
      [userId, limit],
    ),

  create: async (conn, data) => {
    const [result] = await conn.execute(
      `INSERT INTO bill_payments (user_id, biller_code, biller_name, consumer_number, amount, status, transaction_id)
       VALUES (?, ?, ?, ?, ?, 'paid', ?)`,
      [
        data.user_id,
        data.biller_code,
        data.biller_name,
        data.consumer_number,
        data.amount,
        data.transaction_id || null,
      ],
    );
    const [[row]] = await conn.execute('SELECT * FROM bill_payments WHERE id = ?', [result.insertId]);
    return row;
  },

  findById: (id, userId) =>
    queryOne('SELECT * FROM bill_payments WHERE id = ? AND user_id = ?', [id, userId]),
};

module.exports = BillPaymentModel;
