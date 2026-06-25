const { query, queryOne } = require('../config/db');

const PartnerModel = {
  findById: (id) =>
    queryOne('SELECT * FROM offer_partners WHERE id = ?', [id]),

  findAll: () =>
    query('SELECT * FROM offer_partners ORDER BY company_name ASC'),

  findAllActive: () =>
    query('SELECT * FROM offer_partners WHERE is_active = 1 ORDER BY company_name ASC'),

  create: async (data) => {
    const [result] = await query(
      `INSERT INTO offer_partners (company_name, category, billing_model, rate_pkr)
       VALUES (?, ?, ?, ?)`,
      [data.company_name, data.category, data.billing_model, data.rate_pkr],
    );
    return PartnerModel.findById(result.insertId);
  },

  update: async (id, data) => {
    const fields = [];
    const values = [];
    if (data.company_name !== undefined) { fields.push('company_name = ?'); values.push(data.company_name); }
    if (data.category !== undefined)     { fields.push('category = ?');     values.push(data.category); }
    if (data.billing_model !== undefined){ fields.push('billing_model = ?');values.push(data.billing_model); }
    if (data.rate_pkr !== undefined)     { fields.push('rate_pkr = ?');     values.push(data.rate_pkr); }
    if (data.is_active !== undefined)    { fields.push('is_active = ?');    values.push(data.is_active ? 1 : 0); }
    if (!fields.length) return PartnerModel.findById(id);
    values.push(id);
    await query(`UPDATE offer_partners SET ${fields.join(', ')} WHERE id = ?`, values);
    return PartnerModel.findById(id);
  },

  delete: (id) =>
    query('DELETE FROM offer_partners WHERE id = ?', [id]),
};

module.exports = PartnerModel;
