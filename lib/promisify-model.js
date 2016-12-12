const Promise = require('bluebird')

const promisifyModel = (model) => {
  const promisify = (fn) => Promise.promisify(fn, {context: model})

  model.find = promisify(model.find)
  model.count = promisify(model.count)
  model.create = promisify(model.create)
  model.getById = promisify(model.getById)

  return model
}

module.exports = promisifyModel
