const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser")
const port = 3000
const app = express()

// middleware
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.get('/data', (req, res) =>{
  res.json({
    name: "soham",
    age: 21,
    loves: "programming"
  })
})

app.post('/conversation', (req, res)=>{
    // console.log(req.headers.authorization);
    
    res.send({
      msg: "2 + 2 = 4"
    })
})

app.listen(port, () => {
  console.log(` http://localhost:${port}`)
})