const router = require('express').Router();
const auth = require('../middleware/auth');
const { handleGetMonthly } = require('../controllers/reports.controller');

router.use(auth);
router.get('/monthly', handleGetMonthly);

module.exports = router;
