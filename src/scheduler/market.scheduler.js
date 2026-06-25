const cron = require('node-cron');
const { simulatePrices, refreshPrices } = require('../services/market.service');

let started = false;

const startScheduler = () => {
  if (started) return;
  started = true;

  cron.schedule('*/3 * * * *', async () => {
    try {
      await simulatePrices();
    } catch (e) {
      console.warn('[Scheduler] simulatePrices failed:', e.message);
    }
  });

  cron.schedule('*/15 * * * *', async () => {
    try {
      await refreshPrices();
    } catch (e) {
      console.warn('[Scheduler] refreshPrices failed:', e.message);
    }
  });

  console.log('[HisaabAI] Market scheduler started');
};

module.exports = { startScheduler };
