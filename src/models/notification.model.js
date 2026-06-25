const { query, queryOne } = require('../config/db');

const NotificationModel = {
  list: (userId, { limit = 30, unreadOnly = false } = {}) => {
    let sql = 'SELECT * FROM notifications WHERE user_id = ?';
    const params = [userId];
    if (unreadOnly) sql += ' AND is_read = 0';
    sql += ' ORDER BY created_at DESC LIMIT ?';
    params.push(limit);
    return query(sql, params);
  },

  unreadCount: (userId) =>
    query('SELECT COUNT(*) AS count FROM notifications WHERE user_id = ? AND is_read = 0', [userId])
      .then(([r]) => Number(r.count)),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM notifications WHERE id = ? AND user_id = ?', [id, userId]),

  create: async (connOrNull, data) => {
    const payload = data.payload ? JSON.stringify(data.payload) : null;
    const sql = `INSERT INTO notifications (user_id, type, title, body, payload)
                 VALUES (?, ?, ?, ?, ?)`;
    const params = [data.user_id, data.type, data.title, data.body, payload];
    if (connOrNull && connOrNull.execute) {
      const [result] = await connOrNull.execute(sql, params);
      const [[row]] = await connOrNull.execute('SELECT * FROM notifications WHERE id = ?', [result.insertId]);
      return row;
    }
    const result = await query(sql, params);
    return queryOne('SELECT * FROM notifications WHERE id = ?', [result.insertId]);
  },

  markRead: (id, userId) =>
    query('UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?', [id, userId]),

  markAllRead: (userId) =>
    query('UPDATE notifications SET is_read = 1 WHERE user_id = ? AND is_read = 0', [userId]),
};

module.exports = NotificationModel;
