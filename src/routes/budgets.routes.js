const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleList, handleCreate, handleUpdate, handleRemove } = require('../controllers/budgets.controller');

const createSchema = Joi.object({
  category: Joi.string().required(),
  monthly_limit: Joi.number().required(),
});

const updateSchema = Joi.object({
  monthly_limit: Joi.number().required(),
});

router.use(auth);

router.get('/', handleList);
router.post('/', validate(createSchema), handleCreate);
router.put('/:id', validate(updateSchema), handleUpdate);
router.delete('/:id', handleRemove);

module.exports = router;
