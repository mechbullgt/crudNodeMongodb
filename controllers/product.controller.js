const ProductModel = require('../models/product.model');

// Exporting the test controller, now this can be used in the routes

// Demo exporting
module.exports ={
    test:(req,res)=>{
        res.send('Testing Successful!');
    },
    createProduct:(req,res)=>{
        let product = new ProductModel({
            name:req.body.name,
            price:req.body.price
        });
        // Saving the new product to database
        product.save(function(err){
            if(err){
                return next(err);
            }
            res.send('Product created successfully!')
        })
    },
    getAllProducts:(req,res)=>{
        ProductModel.find(function(err,products){
            if(err){
                return next(err);
            }
            res.send(products);
        })
    },
    getProduct:(req,res)=>{
        ProductModel.findById(req.params.id,function(err,product){
            if(err){
                return next(err);
            }
            res.send(product);
        })
    }
};