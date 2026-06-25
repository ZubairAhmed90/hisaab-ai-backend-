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

module.exports = router;
