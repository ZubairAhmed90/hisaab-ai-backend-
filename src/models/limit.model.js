const { query, queryOne } = require('../config/db');

const LimitModel = {
  findById: (id) =>
    queryOne('SELECT * FROM spending_limits WHERE id = ?', [id]),

  findOne: (id, ownerId) =>
    queryOne('SELECT * FROM spending_limits WHERE id = ? AND owner_id = ?', [id, ownerId]),

  findSetByOwner: (ownerId) =>
    query(
      `SELECT sl.*, u.id AS target_id, u.name AS target_name, u.email AS target_email
       FROM spending_limits sl
       LEFT JOIN users u ON u.id = sl.target_user_id
       WHERE sl.owner_id = ? AND sl.is_active = 1`,
      [ownerId],
    ),

  findAppliedToUser: (targetUserId) =>
    query(
      `SELECT sl.*, u.name AS owner_name
       FROM spending_limits sl
       LEFT JOIN users u ON u.id = sl.owner_id
       WHERE sl.target_user_id = ? AND sl.is_active = 1`,
      [targetUserId],
    ),

  findByCategoryForUser: (targetUserId, category) =>
    query(
      `SELECT sl.*, u.name AS owner_name
       FROM spending_limits sl
       JOIN users u ON u.id = sl.owner_id
       WHERE sl.target_user_id = ? AND sl.category = ? AND sl.is_active = 1`,
      [targetUserId, category],
    ),

  findByOwnerAndTarget: (ownerId, targetUserId) =>
    query(
      'SELECT * FROM spending_limits WHERE owner_id = ? AND target_user_id = ? AND is_active = 1',
      [ownerId, targetUserId],
    ),

  findByOwnerAndTargetWithOwner: (ownerId, targetUserId) =>
    query(
      `SELECT sl.*, u.name AS owner_name
       FROM spending_limits sl
       JOIN users u ON u.id = sl.owner_id
       WHERE sl.owner_id = ? AND sl.target_user_id = ? AND sl.is_active = 1`,
      [ownerId, targetUserId],
    ),

  create: async (data) => {
    const [result] = await query(
      `INSERT INTO spending_limits (owner_id, target_user_id, category, monthly_limit, alert_at_percent, is_hard_limit)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.owner_id,
        data.target_user_id,
        data.category,
        data.monthly_limit,
        data.alert_at_percent ?? 80,
        data.is_hard_limit !== undefined ? (data.is_hard_limit ? 1 : 0) : 1,
      ],
    );
    return LimitModel.findById(result.insertId);
  },

  update: async (id, data) => {
    const fields = [];
    const values = [];
    if (data.monthly_limit !== undefined)    { fields.push('monthly_limit = ?');    values.push(data.monthly_limit); }
    if (data.alert_at_percent !== undefined) { fields.push('alert_at_percent = ?'); values.push(data.alert_at_percent); }
    if (data.is_hard_limit !== undefined)    { fields.push('is_hard_limit = ?');    values.push(data.is_hard_limit ? 1 : 0); }
    if (!fields.length) return LimitModel.findById(id);
    values.push(id);
    await query(`UPDATE spending_limits SET ${fields.join(', ')} WHERE id = ?`, values);
    return LimitModel.findById(id);
  },

  delete: (id) =>
    query('DELETE FROM spending_limits WHERE id = ?', [id]),
};

module.exports = LimitModel;
