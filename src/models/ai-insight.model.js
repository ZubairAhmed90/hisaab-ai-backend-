const { query, queryOne } = require('../config/db');

const AiInsightModel = {
  findById: (id) =>
    queryOne('SELECT * FROM ai_insights WHERE id = ?', [id]),

  findLatestByUserAndType: (userId, type) =>
    queryOne(
      'SELECT * FROM ai_insights WHERE user_id = ? AND type = ? ORDER BY generated_at DESC LIMIT 1',
      [userId, type],
    ),

  findUnreadByUser: (userId) =>
    query(
      'SELECT * FROM ai_insights WHERE user_id = ? AND is_read = 0 ORDER BY generated_at DESC',
      [userId],
    ),

  findAllByUser: (userId, limit = 20) =>
    query(
      'SELECT * FROM ai_insights WHERE user_id = ? ORDER BY generated_at DESC LIMIT ?',
      [userId, limit],
    ),

  create: async (data) => {
    const [result] = await query(
      `INSERT INTO ai_insights (user_id, type, content_en, content_ur, valid_until)
       VALUES (?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.type,
        data.content_en,
        data.content_ur || null,
        data.valid_until || null,
      ],
    );
    return AiInsightModel.findById(result.insertId);
  },

  markRead: (id) =>
    query('UPDATE ai_insights SET is_read = 1 WHERE id = ?', [id]),

  rate: (id, rating) =>
    query('UPDATE ai_insights SET rating = ? WHERE id = ?', [rating, id]),

  deleteOldByUser: (userId, keepDays = 30) =>
    query(
      'DELETE FROM ai_insights WHERE user_id = ? AND generated_at < DATE_SUB(NOW(), INTERVAL ? DAY)',
      [userId, keepDays],
    ),
};

module.exports = AiInsightModel;
