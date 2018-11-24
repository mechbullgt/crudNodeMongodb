const mongoose = require('mongoose');
const Schema= mongoose.Schema;

// Defining the schema for the users
let userSchema = new Schema({
    emailId:{type:String,required:true,max:100,min:6},
    password:{type:String,required:true,min:8}
})

//Exported the model for further usage
module.exports= mongoose.model('User',userSchema);