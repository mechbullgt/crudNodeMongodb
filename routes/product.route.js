const express = require('express');
const router = express.Router();

// Calling the controller
const _productController = require('../controllers/product.controller');

// Route : 0, Type: GET, products/test
router.get('/test',_productController.test);

// Route : 1, Type: POST, products/create
router.post('/create',_productController.createProduct);
// Route : 2, Type: GET, products/allProducts
router.get('/allproducts',_productController.getAllProducts);
// Route : 3, Type: GET, products/:id
router.get('/:id',_productController.getProduct);
// Route: 4, Type: PUT, products/:id/update
router.put('/:id/update',_productController.updateProduct);

// Exporting the routes for further usage.
module.exports = router;