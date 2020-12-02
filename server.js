const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const user = require('./routes/users')
const colors = require('colors')


require('dotenv').config()

connectDB()

app.use(express.json())
app.use('/api/users', user)

const PORT = process.env.PORT || 3222

app.listen(PORT, () => console.log(`Listen on port ${PORT}`.cyan.underline))