const whislists = require('../models/whishlistModel')

// add to whislist
exports.addToWishlist = async (req,res)=>{
    const {id,title,price,description,category,image,rating} = req.body
    const userId = req.payload
    try {
        const existingProduct = await whislists.findOne({id,userId})
        if (existingProduct) {
            res.status(406).json("Item already in your wishlist!!")
        } else {
            const newProduct = new whislists({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// getWhislist
exports.getWishlist = async (req,res)=>{
    const userId = req.payload
    try {
        const allproducts = await whislists.find({userId})
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// removeWishlistitem
exports.removeWishlistItem = async (req,res)=>{
    const {id} = req.params
    try {
            const removeItem = await whislists.findByIdAndDelete({_id:id})
            res.status(200).json(removeItem)
    } catch (error) {
        res.status(401).json(error)
    }
}