/* npm modules */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/* local modules */
const logger = require('./lib/logger')
const promisifyBucket = require('./lib/promisify-bucket')
const httpLogger = require('./middlewares/http-logger')
const responseMiddleware = require('./middlewares/response')
const errorMiddleware = require('./middlewares/error')
const serverConfig = require('./config/server')
const bucket = promisifyBucket(require('./db/bucket'))

const app = express()

/* expose bucket globally */
module.exports.bucket = bucket

/* middlewares */
app.use(cors())
app.use(httpLogger)
app.use(bodyParser.json())
app.use(responseMiddleware)
require('./routes')(app)
app.use(errorMiddleware)

/* server */
app.listen(serverConfig.port, (err) => err ?
  logger.error(err) :
  logger.info(`Server running on port ${serverConfig.port}`)
)
