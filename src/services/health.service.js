const { pool } = require('../config/db');

const liveness = () => ({
  status: 'ok',
  service: 'hisaabai-backend',
  version: process.env.npm_package_version || '1.0.0',
  uptimeSeconds: Math.floor(process.uptime()),
  timestamp: new Date().toISOString(),
});

const readiness = async () => {
  const base = liveness();
  try {
    await pool.execute('SELECT 1');
    return { ...base, database: 'connected' };
  } catch {
    return { ...base, status: 'degraded', database: 'unavailable' };
  }
};

module.exports = { liveness, readiness };
