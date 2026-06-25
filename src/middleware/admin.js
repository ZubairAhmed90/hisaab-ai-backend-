const { queryOne } = require('../config/db');
const { fail } = require('../helpers/response');

async function adminMiddleware(req, res, next) {
  if (!req.user || !req.user.userId) {
    return res.status(401).json(fail('Unauthorized'));
  }

  try {
    const user = await queryOne('SELECT is_admin FROM users WHERE id = ?', [req.user.userId]);
    if (!user || !user.is_admin) {
      return res.status(403).json(fail('Admin access required'));
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = adminMiddleware;
