const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb+srv://thinmint:tigers10@clusterk.98gsi.mongodb.net/Login_Redux?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log('Connected to Mongodb')
    } catch(error) {
        console.log(error.message)
    }
}

module.exports = connectDB;