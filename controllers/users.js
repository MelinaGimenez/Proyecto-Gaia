const { validationResult } = require('express-validator')
const db = require('../database/models')

let usersController = {
    // Renderiza vista registro
    register: (req, res) => {
        res.render('register', {
            title: 'register'
        });
    },
    processRegister: (req, res) => {
        let validation = validationResult(req);
        // Si hay errores, los enviara junto a la vista
        if(validation.errors.length > 0) {
            return res.render('register', 
            { 
                // Recorre el array para sacar errores
                errors: validation.mapped(),
                // Guarda la informacion al refrescar pagina
                oldData: req.body,
            },
        )} else {
            res.redirect('/')
        }
    },
    dbregister: (req, res) => {},
    // Renderiza vista login
    login: (req, res) => {
        res.render('login', {
            title: 'login'
        });
    }
}

module.exports = usersController;