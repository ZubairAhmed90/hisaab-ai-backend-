require('dotenv').config();
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || '2';

const app = require('./src/app');
const { initAdmin } = require('./src/services/admin.service');
const { initMarketCache } = require('./src/services/market.service');
const { startScheduler } = require('./src/scheduler/market.scheduler');

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[HisaabAI] API running on 0.0.0.0:${PORT} — /api/v1/health`);

  setTimeout(() => {
    initAdmin().catch((e) => console.warn('[Admin] init failed:', e));
  }, 2000);

  setTimeout(() => {
    initMarketCache().catch((e) => console.warn('[Market] init failed:', e));
  }, 3000);

  if (process.env.DISABLE_CRON !== 'true') {
    startScheduler();
  }
});
