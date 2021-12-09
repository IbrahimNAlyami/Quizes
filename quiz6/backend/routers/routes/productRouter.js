const express = require('express')
const productRouter = express.Router()
const {getProduct, getAccount, addProduct, getInfo} = require('../../routers/controllers/productController')

// GET
userRouter.get("/:products", getProduct)

userRouter.get("/:account", getAccount)

userRouter.get("/", getInfo)


//POST
userRouter.post("/:add", addProduct)



module.exports = {productRouter};