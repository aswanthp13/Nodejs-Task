const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    pid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model('User',userSchema)
