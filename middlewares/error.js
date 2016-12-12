const logger = require('../lib/logger')

const error = (err, req, res, next) => {
  const {message} = err

  logger.error(err)

  if (res.headersSent)
    return next(err)

  if (err.code === 13)
    return res.status(404).json({message})

  return res.status(500).json({message})
}

module.exports = error
