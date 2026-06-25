const { query, queryOne } = require('../config/db');

const BudgetModel = {
  findById: (id) =>
    queryOne('SELECT * FROM budgets WHERE id = ?', [id]),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM budgets WHERE id = ? AND user_id = ?', [id, userId]),

  findByMonth: (userId, month) =>
    query('SELECT * FROM budgets WHERE user_id = ? AND month = ?', [userId, month]),

  create: async (data) => {
    const [result] = await query(
      'INSERT INTO budgets (user_id, category, monthly_limit, month) VALUES (?, ?, ?, ?)',
      [data.user_id, data.category, data.monthly_limit, data.month],
    );
    return BudgetModel.findById(result.insertId);
  },

  update: async (id, monthly_limit) => {
    await query('UPDATE budgets SET monthly_limit = ? WHERE id = ?', [monthly_limit, id]);
    return BudgetModel.findById(id);
  },

  delete: (id) =>
    query('DELETE FROM budgets WHERE id = ?', [id]),
};

module.exports = BudgetModel;
