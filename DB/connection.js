const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then((res)=>{
    console.log("Style Guru Server connected with mongoDB");
}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err);
})
