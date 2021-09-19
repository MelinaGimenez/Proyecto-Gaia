let usersController = {
    register: (req, res) => {
        res.render('register', {
            title: 'register'
        });
    },
}

module.exports = usersController;