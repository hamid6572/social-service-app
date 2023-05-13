const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'rootroot',
  DB: 'Node-Project',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000
  }
}
