const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    console.log("Routing: "+ req.method);
    res.sendFile(path.join(__dirname, '../resource/view/product.html'));
});

router.post('/', express.urlencoded({ extended:false }) ,
    (req, res, next) => {
        console.log("Routing: "+ req.method);
        res.send("Routing: " + JSON.stringify(req.body));
});

module.exports = router;