const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Nconf (A key value store to store passwords and secrets)
const envConfig = require('./envVars');

const PORT =3000;

const app = express();
// MongoDB Connection --Start--
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
// MongoDB Connection --End--

// Assgining /test a route
const product = require('./routes/product.route');

// PORT/products/
app.use('/products',product);

// Demo route PORT/hello
app.use('/hello',(req, res)=>{
    res.send('Hello from server');
});

app.listen(PORT,()=>{
    console.log("Server is up and running at port:"+PORT);
});
