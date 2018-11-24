const express = require('express');
const router = express.Router();

// Calling the controller
const _productController = require('../controllers/product.controller');

// Route : 0, Type: GET, products/test
router.get('/test',_productController.test);

// Route : 1, Type: POST, products/create
router.post('/create',_productController.createProduct);

// Exporting the routes for further usage.
module.exports = router;