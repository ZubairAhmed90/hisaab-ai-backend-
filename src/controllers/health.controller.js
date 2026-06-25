const { liveness, readiness } = require('../services/health.service');
const { ok } = require('../helpers/response');

const getLiveness = (req, res) => res.json(ok(liveness()));

const getReadiness = async (req, res, next) => {
  try {
    res.json(ok(await readiness()));
  } catch (err) {
    next(err);
  }
};

const getRoot = (req, res) => {
  res.json(ok({
    name: 'HisaabAI API',
    version: process.env.npm_package_version || '1.0.0',
    docs: '/api',
  }));
};

module.exports = { getLiveness, getReadiness, getRoot };
