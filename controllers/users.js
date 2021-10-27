let usersController = {
    register: (req, res) => {
        res.render('register', {
            title: 'register'
        });
    },
    processRegister: (req, res) => {
        let name = req.body.name
        let lastName = req.body.lastName
        let avatar = req.body.avatar
        let birthday = req.body.birthday
        let email = req.body.email
        let password = req.body.password
        let passwordCheck = req.body.passwordCheck
    },
    login: (req, res) => {
        res.render('login', {
            title: 'login'
        });
    }
}

module.exports = usersController;