const router = require('express').Router();
const { getLiveness, getReadiness } = require('../controllers/health.controller');

router.get('/', getLiveness);
router.get('/ready', getReadiness);

module.exports = router;
