const express =require('express')
const mongoose = require('mongoose')
const url ="mongodb://localhost:27017/userN"

const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection



con.on('open', () => {
    console.log("Connected")
})

app.use(express.json())

const userRouter = require('./routes/user')
app.use('/user',userRouter)


app.listen(9000, () => {
    console.log("Server Saterted")
})