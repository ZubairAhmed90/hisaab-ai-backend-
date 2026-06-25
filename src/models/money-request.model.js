const { query, queryOne } = require('../config/db');

const MoneyRequestModel = {
  findById: (id) =>
    queryOne('SELECT * FROM money_requests WHERE id = ?', [id]),

  findForUser: (id, userId) =>
    queryOne(
      'SELECT * FROM money_requests WHERE id = ? AND (requester_id = ? OR payer_id = ?)',
      [id, userId, userId],
    ),

  listForUser: (userId, direction = 'all', status) => {
    let sql = `
      SELECT mr.*,
             req.name AS requester_name, req.account_number AS requester_account,
             pay.name AS payer_name, pay.account_number AS payer_account
      FROM money_requests mr
      JOIN users req ON req.id = mr.requester_id
      JOIN users pay ON pay.id = mr.payer_id
      WHERE `;
    const params = [];
    if (direction === 'incoming') {
      sql += 'mr.payer_id = ?';
      params.push(userId);
    } else if (direction === 'outgoing') {
      sql += 'mr.requester_id = ?';
      params.push(userId);
    } else {
      sql += '(mr.requester_id = ? OR mr.payer_id = ?)';
      params.push(userId, userId);
    }
    if (status) {
      sql += ' AND mr.status = ?';
      params.push(status);
    }
    sql += ' ORDER BY mr.created_at DESC';
    return query(sql, params);
  },

  create: async (data) => {
    const result = await query(
      `INSERT INTO money_requests (requester_id, payer_id, amount, reason, status)
       VALUES (?, ?, ?, ?, 'pending')`,
      [data.requester_id, data.payer_id, data.amount, data.reason || null],
    );
    return MoneyRequestModel.findById(result.insertId);
  },

  updateStatus: async (id, status, transferId = null) => {
    await query(
      `UPDATE money_requests SET status = ?, transfer_id = ?, responded_at = NOW() WHERE id = ?`,
      [status, transferId, id],
    );
    return MoneyRequestModel.findById(id);
  },
};

module.exports = MoneyRequestModel;
