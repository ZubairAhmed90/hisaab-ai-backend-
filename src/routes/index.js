const router = require('express').Router();
const { getRoot } = require('../controllers/health.controller');

router.get('/', getRoot);

router.use('/health', require('./health.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/transactions', require('./transactions.routes'));
router.use('/budgets', require('./budgets.routes'));
router.use('/goals', require('./goals.routes'));
router.use('/limits', require('./limits.routes'));
router.use('/reports', require('./reports.routes'));
router.use('/offers', require('./offers.routes'));
router.use('/portfolio', require('./portfolio.routes'));
router.use('/market', require('./market.routes'));
router.use('/mirror', require('./mirror.routes'));
router.use('/ai', require('./ai.routes'));
router.use('/payments', require('./payments.routes'));
router.use('/beneficiaries', require('./beneficiaries.routes'));
router.use('/money-requests', require('./money-requests.routes'));
router.use('/notifications', require('./notifications.routes'));
router.use('/bills', require('./bills.routes'));

module.exports = router;
