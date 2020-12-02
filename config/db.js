const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log('Connected to Mongodb'.green.underline)
    } catch(error) {
        console.log(error.message)
    }
}

module.exports = connectDB;