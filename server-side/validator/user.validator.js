const { body, validationResult } = require('express-validator')

exports.validateUserSignup = [
  body('username')
    .not()
    .isEmpty()
    .withMessage('username must not be empty')
    .isLength({ min: 5 })
    .withMessage('username min length must be 5'),
  body('email')
    .not()
    .isEmpty()
    .withMessage('email must not be empty')
    .isEmail()
    .withMessage('not email format')
    .trim()
    .normalizeEmail(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('password must not be empty')
    .isLength({ min: 5 })
    .withMessage('password min length must be 5'),
  (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) return res.status(422).json({ message: err.errors[0].msg })
    next()
  }
]
exports.validateUserSignin = [
  body('email').not().isEmpty().withMessage('email must not be empty'),
  body('password').not().isEmpty().withMessage('password must not be empty'),
  (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) return res.status(422).json({ message: err.errors[0].msg })
    next()
  }
]
