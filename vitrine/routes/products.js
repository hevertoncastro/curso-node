var express = require('express');
var router = express.Router();


var ProductsController = require('../controllers/ProductController');

router.get('/', ProductsController.findAll);
router.post('/', ProductsController.create);
router.get('/:id', ProductsController.findOne);
router.put('/:id', ProductsController.update);
router.delete('/:id', ProductsController.delete);

module.exports = router;