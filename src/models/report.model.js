const { query, queryOne } = require('../config/db');

const ReportModel = {
  findById: (id) =>
    queryOne('SELECT * FROM report_cards WHERE id = ?', [id]),

  findByUserAndMonth: (userId, month) =>
    queryOne('SELECT * FROM report_cards WHERE user_id = ? AND month = ?', [userId, month]),

  findAllByUser: (userId) =>
    query('SELECT * FROM report_cards WHERE user_id = ? ORDER BY month DESC', [userId]),

  findInMonthRange: (userId, start, end) =>
    queryOne(
      'SELECT * FROM report_cards WHERE user_id = ? AND month >= ? AND month < ? LIMIT 1',
      [userId, start, end],
    ),

  create: async (data) => {
    const result = await query(
      `INSERT INTO report_cards (user_id, month, overall_grade, budget_score, savings_score, trend_score, summary_en)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.month,
        data.overall_grade,
        data.budget_score,
        data.savings_score,
        data.trend_score,
        data.summary_en,
      ],
    );
    return ReportModel.findById(result.insertId);
  },
};

module.exports = ReportModel;
