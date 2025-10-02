const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema=new Schema({
    firstName:String,
    lastName:String
})

model.export=mongoose.model(modelName, Schema)