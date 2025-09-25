const express = require('express')
const Product=require('./DB.mjs')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send(Product,console.log(Product)
  )
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
