const products = require('../models/productModel')

// get all product
exports.getALLProductController = async(req,res)=>{
    console.log("Inside productController");
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// view product
exports.getAProductController = async(req,res)=>{
    console.log("Inside viewProductController");
    const {id} = req.params
    try {
        const singleProduct = await products.findOne({id})
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(401).json(error)
    }
}