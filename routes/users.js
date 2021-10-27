var express = require('express');
var router = express.Router();

// controladores
let usersController = require('../controllers/users.js');

/* REGISTER */
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

/* LOGIN */

router.get('/login', usersController.login)

module.exports = router;