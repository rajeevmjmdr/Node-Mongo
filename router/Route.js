const express = require('express');
const router = express.Router();
//MVC modal-View-Controller
const productController = require('../controller/Product')
router
// POST - CREATE -/products
.post('/products',productController.createProduct)

// GET -READ - /products 
.get('/products',productController.getAllProducts)
.get('/products/:id',productController.getProduct)

//UPDATE
.put('/products/:id',productController.replaceProduct)

// PATCH
.patch('/products/:id',productController.updateProduct)

// DELETE
.delete('/products/:id',productController.deleteProduct)

exports.router = router;