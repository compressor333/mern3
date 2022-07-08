const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, watchUsers } = require('../controllers/userController.js')

router.post('/', registerUser)
router.get('/watch', watchUsers)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router 