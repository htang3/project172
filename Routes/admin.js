const path = require('path');

const express = require('express');

const getAddproductscontroller = require("../controllers/products")
const postAddproductcontroller = require("../controllers/products")
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', getAddproductscontroller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',postAddproductcontroller.postAddProduct );
module.exports = router;

