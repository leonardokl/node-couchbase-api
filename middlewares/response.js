const response = (req, res, next) => {
  res.ok = (data) => res.status(200).json(data)
  res.created = (data) => res.status(201).json(data)

  next()
}

module.exports = response
