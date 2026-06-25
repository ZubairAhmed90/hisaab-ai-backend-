const { query, queryOne } = require('../config/db');

const GoalModel = {
  findById: (id) =>
    queryOne('SELECT * FROM goals WHERE id = ?', [id]),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM goals WHERE id = ? AND user_id = ?', [id, userId]),

  findByUser: (userId) =>
    query('SELECT * FROM goals WHERE user_id = ? ORDER BY deadline ASC', [userId]),

  create: async (data) => {
    const [result] = await query(
      'INSERT INTO goals (user_id, title, target_amount, deadline) VALUES (?, ?, ?, ?)',
      [data.user_id, data.title, data.target_amount, data.deadline],
    );
    return GoalModel.findById(result.insertId);
  },

  updateSavedAmount: async (id, saved_amount) => {
    await query('UPDATE goals SET saved_amount = ? WHERE id = ?', [saved_amount, id]);
    return GoalModel.findById(id);
  },

  delete: (id) =>
    query('DELETE FROM goals WHERE id = ?', [id]),
};

module.exports = GoalModel;
