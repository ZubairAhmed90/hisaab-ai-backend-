const jwt = require('jsonwebtoken');
const { fail } = require('../helpers/response');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(fail('Missing or invalid Authorization header'));
  }

  const token = authHeader.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, email: payload.email };
    next();
  } catch {
    return res.status(401).json(fail('Invalid or expired token'));
  }
}

module.exports = authMiddleware;
