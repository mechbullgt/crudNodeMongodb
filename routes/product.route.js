const express = require('express');
const router = express.Router();

// Calling the controller
const _productController = require('../controllers/product.controller');

// Route : 1, Type: GET
router.get('/test',_productController.test);
router.get('/hi',(req,res)=>{
    res.send('Hi from product.route.js');
});
//router.get('/hello',_productController.hello)

// Exporting the routes for further usage.
module.exports = router;