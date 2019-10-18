const path = require('path');

const express = require('express');

const getproductscontroller = require("../controllers/products")

const router = express.Router();

router.get('/', getproductscontroller.getProducts);

module.exports = router;
