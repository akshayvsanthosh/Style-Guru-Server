const express = require('express')
const productController = require('../controllers/productControllers')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/whislistController')
const cartController = require('../controllers/cartController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')


const router = new express.Router()

// getAllProducts
router.get('/all-Products',productController.getALLProductController)

// getAProduct
router.get('/:id/view-product',productController.getAProductController)

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// addToWishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)

// get wishlist
router.get('/getWishlist',jwtMiddleware,wishlistController.getWishlist)

// remove whislist
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)

// addToCart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)

// get wishlist
router.get('/getCart',jwtMiddleware,cartController.getCart)

// remove whislist
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItem)

// increment cart
router.get('/cart/:id/increment',jwtMiddleware,cartController.incrementCart)

// decrement cart
router.get('/cart/:id/decrement',jwtMiddleware,cartController.decrementCart)

// empty cart
router.delete('/emptyCart',jwtMiddleware,cartController.emptyCart)


module.exports=router