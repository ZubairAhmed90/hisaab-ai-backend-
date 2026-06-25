const mysql = require('mysql2/promise');

function parseDbUrl(url) {
  try {
    const u = new URL(url);
    return {
      host: u.hostname,
      port: Number(u.port) || 3306,
      user: decodeURIComponent(u.username),
      password: decodeURIComponent(u.password),
      database: u.pathname.replace(/^\//, '').split('?')[0],
    };
  } catch {
    return null;
  }
}

function buildConfig() {
  const url = process.env.DATABASE_URL;
  if (url) {
    const parsed = parseDbUrl(url);
    if (parsed) return parsed;
  }
  return {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'hisaabai',
  };
}

const pool = mysql.createPool({
  ...buildConfig(),
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  dateStrings: false,
  typeCast(field, next) {
    if (field.type === 'TINY' && field.length === 1) {
      return field.string() === '1';
    }
    if (field.type === 'DECIMAL' || field.type === 'NEWDECIMAL') {
      const val = field.string();
      return val === null ? null : parseFloat(val);
    }
    return next();
  },
});

async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

async function queryOne(sql, params = []) {
  const rows = await query(sql, params);
  return rows[0] || null;
}

async function transaction(callback) {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const result = await callback(conn);
    await conn.commit();
    return result;
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

async function connQuery(conn, sql, params = []) {
  const [rows] = await conn.execute(sql, params);
  return rows;
}

async function connQueryOne(conn, sql, params = []) {
  const rows = await connQuery(conn, sql, params);
  return rows[0] || null;
}

module.exports = { pool, query, queryOne, transaction, connQuery, connQueryOne };
