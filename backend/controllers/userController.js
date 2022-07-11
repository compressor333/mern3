const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    // vars ----->
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
        message: `succesfully registered ${user.name}`,
        _id: user.id,
        email: user.email,
        token: generateToken(user._id),

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
            message: `Logged in as ${user.name}`,
            token: generateToken(user._id),
            _id: user.id,
        })
    } else {
        throw new Error('invalid credentials')
    }
    
})


const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name: name,
        email: email,
    })
})

const watchUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    watchUsers,
}