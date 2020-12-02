const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const user = require('./routes/users')
const colors = require('colors')
const morgan = require('morgan')


require('dotenv').config()

connectDB()

app.use(express.json())
app.use('/api/users', user)

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    console.log("Development enviorment. Morgan running...".blue)
}


app.use((err, res, req, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
})

const PORT = process.env.PORT || 3222

app.listen(PORT, () => console.log(`Listen on port ${PORT}`.cyan.underline))