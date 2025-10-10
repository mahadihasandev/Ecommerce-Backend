const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
var userSchema=require('./models/userSchema')
const bcrypt = require('bcrypt');
const emailVerification = require('./helpers/emailVerification');
const checker=require('./middlewares/checker')
var jwt = require('jsonwebtoken');

const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://arnob:55iZ0QRE4A4oVGPW@cluster0.602dp.mongodb.net/userdata?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

let users=[
  {firstName:"Mahadi",lastName:"hasan",email:"arnob4all@gmail.com",password:"12345678"},
  {firstName:"hasan",lastName:"arnob",email:"arnob1all@gmail.com",password:"123456789"},
  {firstName:"Rased",lastName:"rofic",email:"rasedl@gmail.com",password:"3456789"},
]



app.get('/',checker , async (req, res) => {
  let allData=await userSchema.find({})
  res.send(allData)
})

app.post("/users",(req,res)=>{
  
  let {firstName,lastName,email,password}=req.body
  if(!firstName){
    res.send("Enter a first name")
  }else if(!lastName){
    res.send("enter a last name")
  }else if(!email){
    res.send("enter a last name")
  }else if(!password){
    res.send("enter a last name")
  }else{
    var token = jwt.sign({ email: email }, "arnob");

    bcrypt.hash(password, 10, function(err, hash) {
   
    data=new userSchema({
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:hash,
      token:token,

    })
    data.save()
    emailVerification(email ) 
})
}
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})