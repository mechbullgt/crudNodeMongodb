const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the schema
let productSchema = new Schema({
    name:{type:String,required:true,max:100},
    price:{type:Number,required:true}
})

// Exporting the model for further usage
module.exports = mongoose.model('ProductSchema',productSchema);