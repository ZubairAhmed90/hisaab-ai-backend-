const router = require('express').Router();
const Joi = require('joi');
const multer = require('multer');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const {
  handleCreate,
  handleList,
  handleGetOne,
  handleSummary,
  handleImportCsv,
  handleUpdateCategory,
  handleRemove,
} = require('../controllers/transactions.controller');

const upload = multer({ storage: multer.memoryStorage() });

const createSchema = Joi.object({
  amount: Joi.number().required(),
  description: Joi.string().required(),
  date: Joi.string().isoDate().required(),
  category: Joi.string().optional().allow('', null),
  source: Joi.string().optional().allow('', null),
  merchant: Joi.string().optional().allow('', null),
});

const updateCategorySchema = Joi.object({
  category: Joi.string().required(),
});

router.use(auth);

router.post('/', validate(createSchema), handleCreate);
router.get('/', handleList);
router.get('/summary', handleSummary);
router.get('/:id', handleGetOne);
router.post('/import-csv', upload.single('file'), handleImportCsv);
router.patch('/:id/category', validate(updateCategorySchema), handleUpdateCategory);
router.delete('/:id', handleRemove);

module.exports = router;
