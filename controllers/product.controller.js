const ProductModel = require('../models/product.model');

// Exporting the test controller, now this can be used in the routes

// Demo exporting
module.exports ={
    test:(req,res)=>{
        res.send('Testing Successful!');
    }
};