const express = require('express');
const path = require('path');
const router = require('./routers/router');
const user_router = require('./routers/user-router');
const product_router = require('./routers/product-router');

const app = express();

app.enable('case sensitive routing');

app.use(express.static("./resource"));

app.use('/lab12', router);

app.use('/users', user_router);

app.use('/products', product_router);

app.use('/payment', function (req, res, next)	{ 
    // throw new Error('Internal Server Error: Something broke!');
    const err = new Error('Internal Server Error: Something broke!');
    next(err);
});

app.use(function (err, req, res, next) { 
    console.log(err.message);
    res.status(500).send(err.message);
});

app.use('/', (req, res, next) => {
    console.log('error page');
    res.status(404)
       .sendFile(path.join(__dirname, './resource/view/error.html'));
});





app.listen(3000, () => {
    console.log('server is running on port 3000');
});
