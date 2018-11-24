const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/mongodb');

// Nconf (A key value store to store passwords and secrets)
const envConfig = require('./envVars');

const app = express();
const PORT = 3000;

// Initializing database
database.databaseInit();

// Assgining /test a route
const product = require('./routes/product.route');

// Bodyparser initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// PORT/products/
app.use('/products', product);

app.listen(PORT, () => {
    console.log("Server is up and running at port:" + PORT);
});
