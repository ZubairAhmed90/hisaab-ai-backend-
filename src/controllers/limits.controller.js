const { listSet, listMine, create, update, remove, linkPartner, unlinkPartner, partnerSummary } = require('../services/limits.service');
const { ok } = require('../helpers/response');

const handleListSet = async (req, res, next) => {
  try { res.json(ok(await listSet(req.user.userId))); } catch (err) { next(err); }
};

const handleListMine = async (req, res, next) => {
  try { res.json(ok(await listMine(req.user.userId))); } catch (err) { next(err); }
};

const handlePartnerSummary = async (req, res, next) => {
  try { res.json(ok(await partnerSummary(req.user.userId))); } catch (err) { next(err); }
};

const handleCreate = async (req, res, next) => {
  try { res.status(201).json(ok(await create(req.user.userId, req.body), 'Limit created')); } catch (err) { next(err); }
};

const handleUpdate = async (req, res, next) => {
  try { res.json(ok(await update(req.user.userId, Number(req.params.id), req.body))); } catch (err) { next(err); }
};

const handleRemove = async (req, res, next) => {
  try { res.json(ok(await remove(req.user.userId, Number(req.params.id)), 'Limit deleted')); } catch (err) { next(err); }
};

const handleLinkPartner = async (req, res, next) => {
  try { res.json(ok(await linkPartner(req.user.userId, req.body.email), 'Partner linked')); } catch (err) { next(err); }
};

const handleUnlinkPartner = async (req, res, next) => {
  try { res.json(ok(await unlinkPartner(req.user.userId), 'Partner unlinked')); } catch (err) { next(err); }
};

module.exports = { handleListSet, handleListMine, handlePartnerSummary, handleCreate, handleUpdate, handleRemove, handleLinkPartner, handleUnlinkPartner };
