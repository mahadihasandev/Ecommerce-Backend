const userSchema = require("../models/userSchema")
var jwt = require('jsonwebtoken');

let checker =(req,res,next)=>{

   jwt.verify(req.headers.authorization, 'arnob',async function (err, decoded) {
      if(err){
         res.send({error:"auth failed"})
         
      }else{
         let data =await userSchema.find({email:decoded.email})
         if(data){
            next()
         }else{
            res.send({error:"data failed"})
         }         
      }
})
}

module.exports=checker