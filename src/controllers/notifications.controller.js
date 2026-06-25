const notificationsService = require('../services/notifications.service');
const { ok } = require('../helpers/response');

const handleList = async (req, res, next) => {
  try {
    res.json(ok(await notificationsService.list(req.user.userId, req.query.unread === '1')));
  } catch (err) { next(err); }
};

const handleUnreadCount = async (req, res, next) => {
  try { res.json(ok({ count: await notificationsService.unreadCount(req.user.userId) })); } catch (err) { next(err); }
};

const handleMarkRead = async (req, res, next) => {
  try { res.json(ok(await notificationsService.markRead(req.user.userId, Number(req.params.id)))); } catch (err) { next(err); }
};

const handleMarkAllRead = async (req, res, next) => {
  try { res.json(ok(await notificationsService.markAllRead(req.user.userId))); } catch (err) { next(err); }
};

module.exports = { handleList, handleUnreadCount, handleMarkRead, handleMarkAllRead };
