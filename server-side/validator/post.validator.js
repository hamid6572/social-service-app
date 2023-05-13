const { body, validationResult } = require('express-validator')

exports.validatePost = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('title must not be empty')
    .isLength({ min: 5 })
    .withMessage('title min length must be 5'),
  body('content').trim(),
  (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) return res.status(422).json({ message: err.errors[0].msg })
    next()
  }
]
