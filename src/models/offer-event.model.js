const { query } = require('../config/db');

const OfferEventModel = {
  create: (data) =>
    query(
      'INSERT INTO user_offer_events (user_id, offer_id, event_type) VALUES (?, ?, ?)',
      [data.user_id, data.offer_id, data.event_type],
    ),

  createInTx: (conn, data) =>
    conn.execute(
      'INSERT INTO user_offer_events (user_id, offer_id, event_type) VALUES (?, ?, ?)',
      [data.user_id, data.offer_id, data.event_type],
    ),
};

module.exports = OfferEventModel;
