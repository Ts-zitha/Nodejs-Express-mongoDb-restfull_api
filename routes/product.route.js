const express = require('express');
const { getProduts, createProduct } = require('../controllers/product.controller');
const router = express.Router();

//get all products
router.get('/',getProduts);
router.post('/', createProduct)

module.exports = router;