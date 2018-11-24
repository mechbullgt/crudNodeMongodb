const mongoose = require('mongoose');
const envConfig = require('../envVars');

// MongoDB Connection --Start--
function databaseInit(){
    console.log('Connecting to MongoDB');
    const dbVariablesObject = envConfig.get("mongoDb");
    const dbUrl = dbVariablesObject.dburl;
    const collection = dbVariablesObject.collectionName;
    let connectionString=dbUrl+collection;
    const connectionOptions = {
        useNewUrlParser: true
    }
    mongoose.connect(connectionString,connectionOptions);
    mongoose.connection.on('connected',()=>{
        console.log('Connection to MonogoDB established.');
    })
    mongoose.connection.on('error',console.error.bind(console,'MongoDB Connection Error:'));
}
// MongoDB Connection --End--

module.exports = {databaseInit};