let productsController = {
    product: (req, res) => {
        res.render('products', {
            title: 'products'
        });
    },
}

module.exports = productsController;