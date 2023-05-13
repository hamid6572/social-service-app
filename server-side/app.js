const cors = require('cors')
const dotenv = require('dotenv')

const express = require('express')
const app = express()

const authRoute = require('./routes/auth.route')
const db = require('./models')
const postsRoute = require('./routes/posts.route')

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

db.sequelize
  .sync({})
  .then(() => {})
  .catch(err => console.log(err))

app.use('/auth', authRoute)
app.use('/posts', postsRoute)

app.use((error, req, res, next) => {
  const { message, statusCode } = error
  res.status(statusCode || 500).json({ message: message })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log('connected')
})
