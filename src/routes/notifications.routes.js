const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  handleList, handleUnreadCount, handleMarkRead, handleMarkAllRead,
} = require('../controllers/notifications.controller');

router.use(auth);

router.get('/', handleList);
router.get('/unread-count', handleUnreadCount);
router.patch('/:id/read', handleMarkRead);
router.post('/read-all', handleMarkAllRead);

module.exports = router;
