const express =require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const url ="mongodb://localhost:27017/userP"

const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection



con.on('open', () => {
    console.log("Connected")
})

app.use(express.json())
app.use(bodyParser.json());

const userRouter = require('./routes/user')
app.use('/user',userRouter)


app.listen(9000, () => {
    console.log("Server Saterted")
})