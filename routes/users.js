const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const generateToken = require('../utils/generateToken')

//POST register a new user

router.post('/', async(req, res) => {
    const { name, email, password, isAdmin } = req.body

    const userExist = await User.findOne({email})
    if(!userExist) {
        const user = new User({
            name,
            email,
            password,
            isAdmin,
        })
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
        await user.save()
    } else {
        res.status(404).json('Already a user with this email or password')
        throw new Error('Email or password already in use')
    }
})

//POST authenticate user

router.post('/login', async(req, res) => {
    const { email, password, token } = req.body

    const user = await User.findOne({email});

    if(user &&(await user.matchPasswords(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).send('No user with this email or password')
        throw new Error('Email or password does not match')
    }

})

module.exports = router