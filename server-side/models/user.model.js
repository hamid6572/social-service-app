const { posts } = require('.')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: { type: Sequelize.STRING },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: { type: Sequelize.STRING }
  })

  return User
}
