const { query, queryOne } = require('../config/db');

const PeerTransferModel = {
  findByReference: (reference) =>
    queryOne('SELECT * FROM peer_transfers WHERE reference = ?', [reference]),

  findById: (id) =>
    queryOne('SELECT * FROM peer_transfers WHERE id = ?', [id]),

  listForUser: (userId, { limit = 20, offset = 0 } = {}) =>
    query(
      `SELECT t.*,
              s.name AS sender_name, s.account_number AS sender_account,
              r.name AS recipient_name, r.account_number AS recipient_account
       FROM peer_transfers t
       JOIN users s ON s.id = t.sender_id
       JOIN users r ON r.id = t.recipient_id
       WHERE t.sender_id = ? OR t.recipient_id = ?
       ORDER BY t.created_at DESC
       LIMIT ? OFFSET ?`,
      [userId, userId, limit, offset],
    ),

  create: async (conn, data) => {
    const [result] = await conn.execute(
      `INSERT INTO peer_transfers (reference, sender_id, recipient_id, amount, fee, note, status, sender_txn_id, recipient_txn_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.reference,
        data.sender_id,
        data.recipient_id,
        data.amount,
        data.fee || 0,
        data.note || null,
        data.status || 'completed',
        data.sender_txn_id || null,
        data.recipient_txn_id || null,
      ],
    );
    const [[row]] = await conn.execute('SELECT * FROM peer_transfers WHERE id = ?', [result.insertId]);
    return row;
  },
};

module.exports = PeerTransferModel;
