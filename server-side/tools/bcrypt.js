const bcrypt = require('bcrypt')
exports.hashedPassword = password => {
  return bcrypt.hash(password, 10)
}

exports.passwordMatch = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword)
}

exports.hashedId = id => {
  return bcrypt.hash(id, 10)
}

exports.IdMatch = (id, hashId) => {
  return bcrypt.compare(id, hashId)
}
