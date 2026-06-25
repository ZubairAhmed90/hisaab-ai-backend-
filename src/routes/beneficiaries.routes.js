const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleList, handleCreate, handleUpdate, handleRemove } = require('../controllers/beneficiaries.controller');

const createSchema = Joi.object({
  name: Joi.string().required(),
  bank: Joi.string().allow('', null).optional(),
  account_number: Joi.string().allow('', null).optional(),
  iban: Joi.string().allow('', null).optional(),
  nickname: Joi.string().allow('', null).optional(),
  linked_user_id: Joi.number().integer().optional(),
  is_favorite: Joi.boolean().optional(),
});

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  bank: Joi.string().allow('', null).optional(),
  account_number: Joi.string().allow('', null).optional(),
  iban: Joi.string().allow('', null).optional(),
  nickname: Joi.string().allow('', null).optional(),
  is_favorite: Joi.boolean().optional(),
});

router.use(auth);

router.get('/', handleList);
router.post('/', validate(createSchema), handleCreate);
router.put('/:id', validate(updateSchema), handleUpdate);
router.delete('/:id', handleRemove);

module.exports = router;
