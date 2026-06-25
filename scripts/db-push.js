require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function dbPush() {
  const sql = fs.readFileSync(path.join(__dirname, '..', 'schema.sql'), 'utf8');
  const statements = sql
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  let conn;
  try {
    conn = await mysql.createConnection(process.env.DATABASE_URL || {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'hisaabai',
      multipleStatements: true,
    });

    for (const stmt of statements) {
      await conn.execute(stmt);
    }
    console.log('[db-push] Schema applied successfully');
  } catch (err) {
    console.error('[db-push] Failed:', err.message);
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

dbPush();
