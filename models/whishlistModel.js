const mongoose = require('mongoose')

const whislistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    rating:{
        type:Object,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }
})

const whislists = mongoose.model("whislists",whislistSchema)

module.exports = whislists