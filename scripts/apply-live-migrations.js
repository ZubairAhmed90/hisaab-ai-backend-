require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

function buildConfig() {
  const url = process.env.DATABASE_URL;
  if (url) {
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
      // fall through
    }
  }
  return {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'hisaabai',
  };
}

async function columnExists(conn, table, column) {
  const [rows] = await conn.query(
    `SELECT 1 FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column],
  );
  return rows.length > 0;
}

async function indexExists(conn, table, indexName) {
  const [rows] = await conn.query(
    `SELECT 1 FROM information_schema.STATISTICS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND INDEX_NAME = ?`,
    [table, indexName],
  );
  return rows.length > 0;
}

async function tableExists(conn, table) {
  const [rows] = await conn.query(
    `SELECT 1 FROM information_schema.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [table],
  );
  return rows.length > 0;
}

async function applyBalanceSnapshots(conn) {
  const txnCols = [
    'account_balance_before',
    'account_balance_after',
    'wallet_balance_before',
    'wallet_balance_after',
  ];
  for (const col of txnCols) {
    if (!(await columnExists(conn, 'transactions', col))) {
      const after = col === 'account_balance_before'
        ? 'AFTER source'
        : col === 'account_balance_after'
          ? 'AFTER account_balance_before'
          : col === 'wallet_balance_before'
            ? 'AFTER account_balance_after'
            : 'AFTER wallet_balance_before';
      await conn.query(`ALTER TABLE transactions ADD COLUMN ${col} DECIMAL(14,2) NULL ${after}`);
      console.log(`[migrate] Added transactions.${col}`);
    } else {
      console.log(`[migrate] transactions.${col} already exists — skip`);
    }
  }

  for (const col of ['wallet_balance_before', 'wallet_balance_after']) {
    if (!(await columnExists(conn, 'stock_trades', col))) {
      const after = col === 'wallet_balance_before' ? 'AFTER total_pkr' : 'AFTER wallet_balance_before';
      await conn.query(`ALTER TABLE stock_trades ADD COLUMN ${col} DECIMAL(14,2) NULL ${after}`);
      console.log(`[migrate] Added stock_trades.${col}`);
    } else {
      console.log(`[migrate] stock_trades.${col} already exists — skip`);
    }
  }

  if (!(await indexExists(conn, 'transactions', 'idx_user_merchant'))) {
    await conn.query('ALTER TABLE transactions ADD INDEX idx_user_merchant (user_id, merchant)');
    console.log('[migrate] Added transactions.idx_user_merchant');
  } else {
    console.log('[migrate] transactions.idx_user_merchant already exists — skip');
  }
}

async function applySchema(conn) {
  const sql = fs.readFileSync(path.join(__dirname, '..', 'schema.sql'), 'utf8');
  const statements = sql
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const stmt of statements) {
    await conn.query(stmt);
  }
  console.log('[migrate] schema.sql applied (CREATE TABLE IF NOT EXISTS)');
}

async function main() {
  const conn = await mysql.createConnection({
    ...buildConfig(),
    multipleStatements: true,
  });

  const [dbRow] = await conn.query('SELECT DATABASE() AS db');
  console.log('[migrate] Connected to', dbRow[0].db);

  const [tablesBefore] = await conn.query(
    'SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() ORDER BY TABLE_NAME',
  );
  console.log('[migrate] Tables before:', tablesBefore.map((r) => r.TABLE_NAME).join(', '));

  await applySchema(conn);
  await applyBalanceSnapshots(conn);

  const [tablesAfter] = await conn.query(
    'SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() ORDER BY TABLE_NAME',
  );
  console.log('[migrate] Tables after:', tablesAfter.length, 'total');

  const required = [
    'account_balance_before',
    'account_balance_after',
    'wallet_balance_before',
    'wallet_balance_after',
  ];
  for (const col of required) {
    const ok = await columnExists(conn, 'transactions', col);
    console.log(`[verify] transactions.${col}:`, ok ? 'OK' : 'MISSING');
  }
  for (const col of ['wallet_balance_before', 'wallet_balance_after']) {
    const ok = await columnExists(conn, 'stock_trades', col);
    console.log(`[verify] stock_trades.${col}:`, ok ? 'OK' : 'MISSING');
  }

  await conn.end();
  console.log('[migrate] Done');
}

main().catch((err) => {
  console.error('[migrate] Failed:', err.message);
  process.exit(1);
});
