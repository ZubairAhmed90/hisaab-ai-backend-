const { query, queryOne } = require('../config/db');

const OfferModel = {
  findById: (id) =>
    queryOne('SELECT * FROM offers WHERE id = ?', [id]),

  findActiveById: (id) =>
    queryOne('SELECT * FROM offers WHERE id = ? AND is_active = 1', [id]),

  findAllActive: () =>
    query(
      `SELECT o.*, p.company_name
       FROM offers o
       JOIN offer_partners p ON p.id = o.partner_id
       WHERE o.is_active = 1`,
    ),

  incrementRedemptions: (conn, id) =>
    conn.execute(
      'UPDATE offers SET current_redemptions = current_redemptions + 1 WHERE id = ?',
      [id],
    ),
};

module.exports = OfferModel;
