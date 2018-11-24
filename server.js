const express = require('express');
const bodyParser = require('body-parser');
const PORT =3000;

const app = express();

// Assgining /test a route
const product = require('./routes/product.route');
app.use('/products',product);
app.use('/hello',(req, res)=>{
    res.send('Hello from server');
});

app.listen(PORT,()=>{
    console.log("Server is up and running at port:"+PORT);
});
