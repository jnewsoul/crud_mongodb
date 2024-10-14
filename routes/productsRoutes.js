const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Route to show all products
router.get('/', ProductController.showProducts);

// Route to render the form for creating a new product
router.get('/create', ProductController.createProduct);

// Route to handle the creation of a new product
router.post('/create', ProductController.createProductPost);

// Route to show a specific product by ID
router.get('/:id', ProductController.getProduct);

// Route to render the form for editing a specific product
router.get('/edit/:id', ProductController.editProduct);

// Route to handle the update of a specific product
router.post('/edit', ProductController.editProductPost);

// Route to handle the removal of a specific product
router.post('/remove/:id', ProductController.removeProduct);

module.exports = router;
