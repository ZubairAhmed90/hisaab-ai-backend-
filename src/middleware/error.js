const { fail } = require('../helpers/response');

function errorHandler(err, req, res, next) {
  console.error('[HisaabAI Error]', err.message || err);

  if (err.status) {
    return res.status(err.status).json(fail(err.message));
  }

  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json(fail('Duplicate entry'));
  }

  return res.status(500).json(fail('Internal server error'));
}

module.exports = errorHandler;
