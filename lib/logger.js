const winston = require('winston')

const logger = {
  info: (data) => winston.info(data, {date: Date()}),
  error: (data) => winston.log('error', data, {date: Date()})
}

module.exports = logger
