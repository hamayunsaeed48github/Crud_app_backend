const express = require('express')
const router = express.Router()
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require("../controllers/product.controller")
const Product = require("../model/product.model")

router.get('/',getProducts) // read all items

router.get("/:id",getProduct) // read item by id

router.post("/",createProduct) // create item

router.put("/:id",updateProduct)

router.delete("/:id",deleteProduct)

module.exports = router;


