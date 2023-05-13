const express = require('express')
const router = express.Router()

const authController = require('../controller/auth.controller')

const { validateUserSignup, validateUserSignin } = require('../validator/user.validator')

router.post('/signup', validateUserSignup, authController.signup)
router.post('/login', validateUserSignin, authController.login)

module.exports = router
