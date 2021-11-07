// Requerimos lo necesario
var express = require('express');
var router = express.Router();
var path = require('path')

// Para las validaciones, se destructura y se usa body (o check)
const { body } = require('express-validator')

// Multer
var multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatar');
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + '_img' + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const uploadFile = multer({ storage })

// Validaciones
const validations = [
    body('name').notEmpty().withMessage('Debes agregar un nombre'),
    body('lastName').notEmpty().withMessage('Debes agregar un apellido'),
    body('birthday').notEmpty().withMessage('Debes agregar tu cumpleaños'),
    body('email').notEmpty().withMessage('Debes agregar tu email').bail()
    .isEmail().withMessage('Debes escribir un formato de mail válido'),
    body('password').notEmpty().withMessage('Debes agregar una contraseña'),
    body('passwordCheck').notEmpty().withMessage('Debes confirmar la contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.PNG'];

        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones permitidas son .jpg .png .gif .PNG')
            }
        }
        return true
    })
]

// Controladores
let usersController = require('../controllers/users.js');

// Rutas de registro
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Ruta de login
router.get('/login', usersController.login)

module.exports = router;