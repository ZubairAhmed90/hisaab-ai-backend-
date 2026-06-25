const router = require('express').Router();
const auth = require('../middleware/auth');
const { handleGetAll, handleGetCatalog, handleGetStocks, handleGetGold, handleGetTbill } = require('../controllers/market.controller');

router.use(auth);

router.get('/all', handleGetAll);
router.get('/catalog', handleGetCatalog);
router.get('/stocks', handleGetStocks);
router.get('/gold', handleGetGold);
router.get('/tbill', handleGetTbill);

module.exports = router;
