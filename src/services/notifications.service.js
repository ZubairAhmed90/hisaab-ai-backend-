const NotificationModel = require('../models/notification.model');

const list = async (userId, unreadOnly = false) => {
  const items = await NotificationModel.list(userId, { unreadOnly });
  return items.map((n) => ({
    ...n,
    payload: typeof n.payload === 'string' ? JSON.parse(n.payload) : n.payload,
    is_read: Boolean(n.is_read),
  }));
};

const unreadCount = (userId) => NotificationModel.unreadCount(userId);

const markRead = async (userId, id) => {
  const row = await NotificationModel.findOne(id, userId);
  if (!row) {
    const err = new Error('Notification not found');
    err.status = 404;
    throw err;
  }
  await NotificationModel.markRead(id, userId);
  return { read: true };
};

const markAllRead = (userId) => NotificationModel.markAllRead(userId).then(() => ({ read: true }));

module.exports = { list, unreadCount, markRead, markAllRead };
