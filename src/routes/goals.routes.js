const router = require('express').Router();
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { handleList, handleCreate, handleUpdate, handleRemove } = require('../controllers/goals.controller');

const createSchema = Joi.object({
  title: Joi.string().required(),
  target_amount: Joi.number().required(),
  deadline: Joi.string().isoDate().required(),
});

const updateSchema = Joi.object({
  saved_amount: Joi.number().required(),
});

router.use(auth);

router.get('/', handleList);
router.post('/', validate(createSchema), handleCreate);
router.put('/:id', validate(updateSchema), handleUpdate);
router.delete('/:id', handleRemove);

module.exports = router;
