const express = require('express');
const rootDir = require("../utils/path")
//path core module
const path = require('path')

const shopRoute = express.Router();

shopRoute.get("/",(req,res, next)=>{
 
    res.sendFile(path.join(rootDir,"Views", "shop.html")); 
});

module.exports = shopRoute;