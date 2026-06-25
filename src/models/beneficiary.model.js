const { query, queryOne } = require('../config/db');

const BeneficiaryModel = {
  findByUser: (userId) =>
    query(
      `SELECT b.*, u.name AS linked_name, u.account_number AS linked_account
       FROM beneficiaries b
       LEFT JOIN users u ON u.id = b.linked_user_id
       WHERE b.user_id = ?
       ORDER BY b.is_favorite DESC, b.name ASC`,
      [userId],
    ),

  findOne: (id, userId) =>
    queryOne('SELECT * FROM beneficiaries WHERE id = ? AND user_id = ?', [id, userId]),

  findByLinkedUser: (userId, linkedUserId) =>
    queryOne(
      'SELECT * FROM beneficiaries WHERE user_id = ? AND linked_user_id = ?',
      [userId, linkedUserId],
    ),

  create: async (data) => {
    const result = await query(
      `INSERT INTO beneficiaries (user_id, linked_user_id, name, bank, account_number, iban, nickname, is_favorite)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.linked_user_id || null,
        data.name,
        data.bank || null,
        data.account_number || null,
        data.iban || null,
        data.nickname || null,
        data.is_favorite ? 1 : 0,
      ],
    );
    return BeneficiaryModel.findOne(result.insertId, data.user_id);
  },

  update: async (id, userId, data) => {
    const fields = [];
    const values = [];
    if (data.name !== undefined) { fields.push('name = ?'); values.push(data.name); }
    if (data.bank !== undefined) { fields.push('bank = ?'); values.push(data.bank); }
    if (data.account_number !== undefined) { fields.push('account_number = ?'); values.push(data.account_number); }
    if (data.iban !== undefined) { fields.push('iban = ?'); values.push(data.iban); }
    if (data.nickname !== undefined) { fields.push('nickname = ?'); values.push(data.nickname); }
    if (data.is_favorite !== undefined) { fields.push('is_favorite = ?'); values.push(data.is_favorite ? 1 : 0); }
    if (data.linked_user_id !== undefined) { fields.push('linked_user_id = ?'); values.push(data.linked_user_id); }
    if (!fields.length) return BeneficiaryModel.findOne(id, userId);
    values.push(id, userId);
    await query(`UPDATE beneficiaries SET ${fields.join(', ')} WHERE id = ? AND user_id = ?`, values);
    return BeneficiaryModel.findOne(id, userId);
  },

  delete: (id, userId) =>
    query('DELETE FROM beneficiaries WHERE id = ? AND user_id = ?', [id, userId]),
};

module.exports = BeneficiaryModel;
