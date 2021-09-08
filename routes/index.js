var express = require('express');
var router = express.Router();

// controladores
let indexController = require('../controllers/index.js');

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
