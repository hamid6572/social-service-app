const db = require('../models')

const { generateToken } = require('../tools/generateToken')
const { hashedPassword, passwordMatch } = require('../tools/bcrypt')

const User = db.users

exports.signup = async (req, res, next) => {
  try {
    const hashPassword = await hashedPassword(req.body.password)
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashPassword
    }

    const userExist = await User.findOne({ where: { email: user.email } })
    if (userExist) throw new Error('user exist already')
    else {
      const newUser = await User.create(user)
      if (!newUser) throw new Error('user not created')

      const token = generateToken(user.email, newUser.id)
      res.json({
        signup: 'success',
        token: token,
        userId: newUser.id
      })
    }
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email: email } })
    if (!user) throw new Error('user not exist')

    const passwordCheck = await passwordMatch(password, user.password)
    if (!passwordCheck) throw new Error('password does not match.')

    const token = generateToken(user.email, user.id)

    res.json({
      succes: 'login succes',
      token: token,
      userId: user.id
    })
  } catch (err) {
    next(err)
  }
}
