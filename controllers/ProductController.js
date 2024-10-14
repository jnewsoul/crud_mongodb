const Product = require('../models/Product');

module.exports = class ProductController {
    // Display all products
    static async showProducts(req, res) {
        const products = await Product.getProducts();
        res.render('products/all', { products });
    }

    // Render the create product form
    static createProduct(req, res) {
        res.render('products/create');
    }

    // Handle product creation
    static createProductPost(req, res) {
        const { name, price, category, image, description } = req.body;
        const product = new Product(name, price, category, image, description);

        product.save();
        res.redirect('/products');
    }

    // Display a specific product by ID
    static async getProduct(req, res) {
        const id = req.params.id;
        const product = await Product.getProductById(id);
        res.render('products/product', { product });
    }

    // Remove a product by ID
    static async removeProduct(req, res) {
        const id = req.params.id;
        await Product.removeProductById(id);
        res.redirect('/products');
    }

    // Render the edit product form
    static async editProduct(req, res) {
        const id = req.params.id;
        const product = await Product.getProductById(id);
        res.render('products/edit', { product });
    }

    // Handle product update
    static async editProductPost(req, res) {
        const { id, name, price, category, image, description } = req.body;
        const product = new Product(name, price, category, image, description);
        await product.updateProduct(id);
        res.redirect('/products');
    }
};
