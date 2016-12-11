const logger = require('../lib/logger')

const error = (err, req, res, next) => {
  logger.error(err)

  if (res.headersSent)
    return next(err)

  if (err.code === 13)
    return res.status(404).json({error: err.message})

  return res.status(500).json({error: err.message})
}

module.exports = error
