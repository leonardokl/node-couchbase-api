const Customer = require('../models/customer')
const ottomanPromises = require('../lib/ottoman-promises')

const customerController = {
  index(req, res, next) {
    const filters = {_type: 'Customer'}
    const options = {limit: 10}

    Customer.find(filters, options)
      .then(res.ok)
      .catch(next)
  },

  create(req, res, next) {
    const {body} = req

    Customer.create(body)
      .then(res.created)
      .catch(next)
  },

  getById(req, res, next) {
    const {customerId} = req.params

    Customer.getById(customerId)
      .then(res.ok)
      .catch(next)
  },

  updateById(req, res, next) {
    const {customerId} = req.params
    const {body} = req

    Customer.getById(customerId)
      .then(country => Object.assign(country, body))
      .then(ottomanPromises.save)
      .then(res.ok)
      .catch(next)
  },

  removeById(req, res, next) {
    const {customerId} = req.params
    const getSuccessMessage = () => ({message: `${customerId} removed`})

    Customer.getById(customerId)
      .then(ottomanPromises.remove)
      .then(getSuccessMessage)
      .then(res.ok)
      .catch(next)
  }
}

module.exports = customerController
