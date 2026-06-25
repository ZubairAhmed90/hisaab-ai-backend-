const { query, queryOne } = require('../config/db');

const UserModel = {
  findById: (id) =>
    queryOne('SELECT * FROM users WHERE id = ?', [id]),

  findByEmail: (email) =>
    queryOne('SELECT * FROM users WHERE email = ?', [email]),

  findByAccountNumber: (account_number) =>
    queryOne('SELECT * FROM users WHERE account_number = ?', [account_number]),

  findByResetToken: (tokenHash) =>
    queryOne(
      'SELECT * FROM users WHERE reset_token_hash = ? AND reset_token_expires > NOW()',
      [tokenHash],
    ),

  findAll: () =>
    query('SELECT * FROM users ORDER BY created_at DESC'),

  findWithHoldingsCount: () =>
    query(
      `SELECT u.id, u.account_number, u.name, u.email, u.phone,
              u.wallet_balance, u.account_balance, u.monthly_income,
              u.is_admin, u.created_at, u.last_login,
              COUNT(h.id) AS holdings_count
       FROM users u
       LEFT JOIN user_holdings h ON h.user_id = u.id
       GROUP BY u.id
       ORDER BY u.created_at DESC`,
    ),

  findWithoutAccountNumber: () =>
    query("SELECT id FROM users WHERE account_number IS NULL OR account_number = ''"),

  create: async (data) => {
    const result = await query(
      `INSERT INTO users (name, email, password_hash, phone, monthly_income, account_number, wallet_balance, account_balance)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.name,
        data.email,
        data.password_hash,
        data.phone || null,
        data.monthly_income ?? 0,
        data.account_number,
        data.wallet_balance ?? 0,
        data.account_balance ?? 0,
      ],
    );
    return UserModel.findById(result.insertId);
  },

  createAdmin: async (data) => {
    const result = await query(
      'INSERT INTO users (name, email, password_hash, account_number, is_admin, wallet_balance) VALUES (?, ?, ?, ?, 1, 0)',
      [data.name, data.email, data.password_hash, data.account_number],
    );
    return UserModel.findById(result.insertId);
  },

  update: async (id, data) => {
    const fields = [];
    const values = [];
    if (data.name !== undefined)               { fields.push('name = ?');               values.push(data.name); }
    if (data.phone !== undefined)              { fields.push('phone = ?');              values.push(data.phone); }
    if (data.monthly_income !== undefined)     { fields.push('monthly_income = ?');     values.push(data.monthly_income); }
    if (data.preferred_language !== undefined) { fields.push('preferred_language = ?'); values.push(data.preferred_language); }
    if (data.account_number !== undefined)     { fields.push('account_number = ?');     values.push(data.account_number); }
    if (data.is_admin !== undefined)           { fields.push('is_admin = ?');           values.push(data.is_admin ? 1 : 0); }
    if (data.last_login !== undefined)         { fields.push('last_login = NOW()'); }
    if (data.reset_token_hash !== undefined)   { fields.push('reset_token_hash = ?');   values.push(data.reset_token_hash); }
    if (data.reset_token_expires !== undefined){ fields.push('reset_token_expires = ?');values.push(data.reset_token_expires); }
    if (data.password_hash !== undefined)      { fields.push('password_hash = ?');      values.push(data.password_hash); }
    if (data.linked_partner_id !== undefined)  { fields.push('linked_partner_id = ?');  values.push(data.linked_partner_id); }
    if (!fields.length) return UserModel.findById(id);
    values.push(id);
    await query(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`, values);
    return UserModel.findById(id);
  },

  incrementWallet: (conn, id, amount) =>
    conn.execute('UPDATE users SET wallet_balance = wallet_balance + ? WHERE id = ?', [amount, id]),

  decrementWallet: (conn, id, amount) =>
    conn.execute('UPDATE users SET wallet_balance = wallet_balance - ? WHERE id = ?', [amount, id]),

  incrementAccount: (conn, id, amount) =>
    conn.execute('UPDATE users SET account_balance = account_balance + ? WHERE id = ?', [amount, id]),

  decrementAccount: (conn, id, amount) =>
    conn.execute('UPDATE users SET account_balance = account_balance - ? WHERE id = ?', [amount, id]),

  transferBalances: (conn, id, walletDelta, accountDelta) =>
    conn.execute(
      'UPDATE users SET wallet_balance = wallet_balance + ?, account_balance = account_balance + ? WHERE id = ?',
      [walletDelta, accountDelta, id],
    ),
};

module.exports = UserModel;
