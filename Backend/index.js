const connectToMongo=require('./db')
const express = require('express')
var cors = require('cors') 
const app = express()

connectToMongo()
app.use(cors())
app.use(express.json())

const port = 5000
app.use('/auth',require('./routes/auth'))
app.use('/user',require('./routes/takingquiz'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})