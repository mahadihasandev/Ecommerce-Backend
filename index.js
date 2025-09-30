const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

let users=[
  {firstName:"mahadi",lastName:"hasan",email:"arnob4all@gmail.com",pass:"12345678"},
  {firstName:"hasan",lastName:"arnob",email:"arnob1all@gmail.com",pass:"123456789"},
]

app.get('/', (req, res) => {
  res.send(users)
  
})

app.post("/",(req,res)=>{
  console.log(req.body);
  
  users.push(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})