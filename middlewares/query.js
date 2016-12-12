const query = (req, res, next) => {
  const {query} = req
  const limit = Number(query.limit) || 5
  const skip = Number(query.page) ? (Number(query.page) - 1) : 0
  // const fields = []

  req.query = {limit, skip}

  next()
}

module.exports = query
