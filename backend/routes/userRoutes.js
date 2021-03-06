const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, watchUsers, watchToken, } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/watch', watchUsers)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/token', watchToken)


module.exports = router 