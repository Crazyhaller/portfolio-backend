const express = require('express')
const app = express()
const connectDB = require('./config/db')
const contactRoute = require('./routes/contactRoute')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000
connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/contact', contactRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
