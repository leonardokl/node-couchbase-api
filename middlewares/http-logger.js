const morgan = require('morgan')
const __PRODUCTION__ = process.env.NODE_ENV === 'production'
const httpLogger = __PRODUCTION__ ? morgan('tiny') : morgan('dev')

module.exports = httpLogger
