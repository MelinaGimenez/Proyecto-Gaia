let indexController = {
    index: (req, res) => {
        res.render('index', {
            title: 'hola'
        });
    },
}

module.exports = indexController;