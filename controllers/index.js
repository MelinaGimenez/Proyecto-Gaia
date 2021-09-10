let indexController = {
    index: (req, res) => {
        res.render('index', {
            title: 'index'
        });
    },
}

module.exports = indexController;