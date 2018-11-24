const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/mongodb');

// Nconf (A key value store to store passwords and secrets)
const envConfig = require('./envVars');

const app = express();
const PORT =3000;

// Initializing database
database.databaseInit();

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
