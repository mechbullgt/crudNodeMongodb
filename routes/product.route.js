const express = require('express');
const router = express.Router();

// Calling the controller
const _productController = require('../controllers/product.controller');

// Route : 1, Type: GET, products/test
router.get('/test',_productController.test);

// Exporting the routes for further usage.
module.exports = router;