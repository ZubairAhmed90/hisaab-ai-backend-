const router = require('express').Router();
const auth = require('../middleware/auth');
const { handleGetMirror } = require('../controllers/mirror.controller');

router.use(auth);
router.get('/', handleGetMirror);

module.exports = router;
