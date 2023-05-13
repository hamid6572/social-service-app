const Sequelize = require('sequelize')

const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    aquire: dbConfig.pool.aquire,
    idle: dbConfig.pool.idle
  },
  logging: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('./user.model.js')(sequelize, Sequelize)
db.posts = require('./post.model.js')(sequelize, Sequelize)

db.posts.belongsTo(db.users, { foreignkey: 'userId' })
db.users.hasMany(db.posts, { foreignkey: 'userId' })

module.exports = db
