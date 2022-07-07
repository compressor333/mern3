const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/endpoint', require('./routes/goalRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`server running on port ${port}`))