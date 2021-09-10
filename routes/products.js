var express = require('express');
var router = express.Router();

// controladores
let productsController = require('../controllers/products.js');

/* GET home page. */
router.get('/', productsController.product);

module.exports = router;