const express = require("express");
const path = require('path');
const rootDir = require("../utils/path")
const router = express.Router();

// /admin/add-product
//use get to give us exact match. Therefore, it does not the order in app.js
router.get("/add-product",(req,res, next)=>{
    
    res.sendFile(path.join(rootDir,"Views","add-product.html"));
});

// /admin/add-product
//app.get to filter for incoming get req
//app.post to filter for incoming post req
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;