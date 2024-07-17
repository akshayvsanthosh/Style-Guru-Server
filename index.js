// loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./DB/connection')

const sGServer = express()

sGServer.use(cors())
sGServer.use(express.json())
sGServer.use(router)

const PORT = 3000 || process.env.PORT

sGServer.listen(PORT,()=>{
    console.log(`Style Guru server started at port : ${PORT}`);
})

sGServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red;'>Style Guru Server started and waiting for client request</h1>`)
})