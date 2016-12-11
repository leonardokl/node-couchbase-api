const Customer = require('../models/customer')

const customerController = {
  index(req, res) {
    Customer.getAll()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(404).json({error}))
  },

  create(req, res) {
    const {body} = req

    Customer.create(body)
      .then(response => res.status(201).json(response))
      .catch(error => res.status(500).json({error}))
  },

  getByID(req, res) {
    const {customerID} = req.params

    Customer.getByID(customerID)
      .then(result => res.status(200).json(result.value))
      .catch(error => res.status(404).json({error}))
  },

  updateByID(req, res) {
    const {customerID} = req.params
    const {body} = req

    Customer.updateByID(customerID, body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).json({error}))
  },

  removeByID(req, res) {
    const {customerID} = req.params

    Customer.removeByID(customerID)
      .then(result => res.status(200).json({
        message: `Customer ${customerID} removed`
      }))
      .catch(error => res.status(404).json({error}))
  },
}

module.exports = customerController
