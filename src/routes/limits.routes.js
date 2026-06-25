const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const {
  handleListSet, handleListMine, handlePartnerSummary,
  handleCreate, handleUpdate, handleRemove,
  handleLinkPartner, handleUnlinkPartner,
} = require('../controllers/limits.controller');

const createSchema = Joi.object({
  category: Joi.string().required(),
  monthly_limit: Joi.number().required(),
  alert_at_percent: Joi.number().optional(),
  is_hard_limit: Joi.boolean().optional(),
  target_user_id: Joi.number().integer().optional(),
});

const updateSchema = Joi.object({
  monthly_limit: Joi.number().optional(),
  alert_at_percent: Joi.number().optional(),
  is_hard_limit: Joi.boolean().optional(),
});

const linkSchema = Joi.object({
  email: Joi.string().email().required(),
});

router.use(auth);

router.get('/', handleListSet);
router.get('/mine', handleListMine);
router.get('/partner', handlePartnerSummary);
router.post('/', validate(createSchema), handleCreate);
router.put('/:id', validate(updateSchema), handleUpdate);
router.delete('/:id', handleRemove);
router.post('/link-partner', validate(linkSchema), handleLinkPartner);
router.post('/unlink-partner', handleUnlinkPartner);

module.exports = router;
