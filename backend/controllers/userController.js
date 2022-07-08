const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/Usermodel')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //fill checker

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('fill all fields please')
    }

    //user exists checker

    const userExist = await User.findOne({email})

    if(userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) 

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email

        })
    } else {
        throw new Error('invalid data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user &&(await bcrypt.compare(password, user.password))) {
        res.json({
            message: `Logged in as ${user.name}`
        })
    } else {
        throw new Error('invalid credentials')
    }
    
})



const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User data display'})
})

const watchUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
    watchUsers,
}