const { query, queryOne } = require('../config/db');
const { formatTxn } = require('../helpers/balance.helpers');

const BALANCE_COLS = `account_balance_before, account_balance_after, wallet_balance_before, wallet_balance_after`;

const TransactionModel = {
  findById: (id) =>
    queryOne('SELECT * FROM transactions WHERE id = ?', [id]).then(formatTxn),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM transactions WHERE id = ? AND user_id = ?', [id, userId]).then(formatTxn),

  findMany: (userId, { limit = 20, offset = 0, merchant, linkedUserId } = {}) => {
    const params = [userId];
    let sql = 'SELECT t.* FROM transactions t';

    if (linkedUserId) {
      sql += ` INNER JOIN peer_transfers pt ON (t.id = pt.sender_txn_id OR t.id = pt.recipient_txn_id)
        WHERE t.user_id = ? AND ((pt.sender_id = ? AND pt.recipient_id = ?) OR (pt.sender_id = ? AND pt.recipient_id = ?))`;
      params.push(userId, linkedUserId, userId, linkedUserId);
    } else {
      sql += ' WHERE t.user_id = ?';
      if (merchant) {
        sql += ' AND t.merchant = ?';
        params.push(merchant);
      }
    }

    sql += ' ORDER BY t.transaction_date DESC, t.id DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    return query(sql, params).then((rows) => rows.map(formatTxn));
  },

  count: (userId, { merchant, linkedUserId } = {}) => {
    const params = [userId];
    let sql = 'SELECT COUNT(*) AS total FROM transactions t';

    if (linkedUserId) {
      sql += ` INNER JOIN peer_transfers pt ON (t.id = pt.sender_txn_id OR t.id = pt.recipient_txn_id)
        WHERE t.user_id = ? AND ((pt.sender_id = ? AND pt.recipient_id = ?) OR (pt.sender_id = ? AND pt.recipient_id = ?))`;
      params.push(userId, linkedUserId, userId, linkedUserId);
    } else {
      sql += ' WHERE t.user_id = ?';
      if (merchant) {
        sql += ' AND t.merchant = ?';
        params.push(merchant);
      }
    }

    return query(sql, params).then(([r]) => Number(r.total));
  },

  findByDateRange: (userId, start, end) =>
    query(
      'SELECT * FROM transactions WHERE user_id = ? AND transaction_date >= ? AND transaction_date < ?',
      [userId, start, end],
    ).then((rows) => rows.map(formatTxn)),

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
      `INSERT INTO transactions (user_id, amount, description, category, merchant, transaction_date, source,
        ${BALANCE_COLS})
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.amount,
        data.description,
        data.category || 'other',
        data.merchant || null,
        data.transaction_date,
        data.source || 'manual',
        data.account_balance_before ?? null,
        data.account_balance_after ?? null,
        data.wallet_balance_before ?? null,
        data.wallet_balance_after ?? null,
      ],
    );
    const [[row]] = await conn.execute('SELECT * FROM transactions WHERE id = ?', [result.insertId]);
    return formatTxn(row);
  },

  createDirect: async (data) => {
    const result = await query(
      `INSERT INTO transactions (user_id, amount, description, category, merchant, transaction_date, source,
        ${BALANCE_COLS})
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.amount,
        data.description,
        data.category || 'other',
        data.merchant || null,
        data.transaction_date,
        data.source || 'manual',
        data.account_balance_before ?? null,
        data.account_balance_after ?? null,
        data.wallet_balance_before ?? null,
        data.wallet_balance_after ?? null,
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
