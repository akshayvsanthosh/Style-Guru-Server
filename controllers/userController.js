const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

// register
exports.registerController=async(req,res)=>{
    console.log("Inside registerController");
    const {username,email,password} = req.body
    console.log(username,email,password);
    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            res.status(406).json("Account already exist.. Please login!")
        } else {
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// login
exports.loginController = async (req,res)=>{
    console.log("inside loginController");
    const {email,password} = req.body
    try {
        const existingUser = await  users.findOne({email,password})
        if (existingUser) {
            // token generator
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
                user:existingUser,
                token
            })
        } else {
            res.status(404).json("Invalid Email / Password...")
        }
    } catch (error) {
        res.status(401).json(err)
    }
}