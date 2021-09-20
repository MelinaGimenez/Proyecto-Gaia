let usersController = {
    register: (req, res) => {
        res.render('register', {
            title: 'register'
        });
    },
    login: (req, res) => {
        res.render('login', {
            title: 'login'
        });
    },
}

module.exports = usersController;