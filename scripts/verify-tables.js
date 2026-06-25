require('dotenv').config();
const mysql = require('mysql2/promise');

async function main() {
  const conn = await mysql.createConnection(process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [rows] = await conn.query(
    `SELECT TABLE_NAME FROM information_schema.TABLES
     WHERE TABLE_SCHEMA = DATABASE()
     ORDER BY TABLE_NAME`,
  );

  const names = rows.map((r) => r.TABLE_NAME);
  const required = ['beneficiaries', 'peer_transfers', 'money_requests', 'notifications', 'bill_payments'];
  const missing = required.filter((t) => !names.includes(t));

  console.log('[verify] Total tables:', names.length);
  console.log('[verify] Payment tables:', required.filter((t) => names.includes(t)).join(', '));
  if (missing.length) {
    console.error('[verify] Missing:', missing.join(', '));
    process.exit(1);
  }
  console.log('[verify] All payment tables present');
  await conn.end();
}

main().catch((err) => {
  console.error('[verify] Failed:', err.message);
  process.exit(1);
});
