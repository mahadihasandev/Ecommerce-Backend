const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("userinfo", userSchema)