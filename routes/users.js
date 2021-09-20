var express = require('express');
var router = express.Router();

// controladores
let usersController = require('../controllers/users.js');

/* GET register */
router.get('/register', usersController.register);

router.get('/login', usersController.login)

module.exports = router;