const Country = require('../models/country')
const ottomanPromises = require('../lib/ottoman-promises')

const CountryController = {
  index(req, res, next) {
    const filters = {_type: 'Country'}
    const options = {limit: 10}

    Country.find(filters, options)
      .then(res.ok)
      .catch(next)
  },

  create(req, res, next) {
    const {body} = req

    Country.create(body)
      .then(res.created)
      .catch(next)
  },

  getById(req, res, next) {
    const {countryId} = req.params

    Country.getById(countryId)
      .then(res.ok)
      .catch(next)
  },

  updateById(req, res, next) {
    const {countryId} = req.params
    const {body} = req

    Country.getById(countryId)
      .then(country => Object.assign(country, body))
      .then(ottomanPromises.save)
      .then(res.ok)
      .catch(next)
  },

  remove(req, res, next) {
    const {countryId} = req.params
    const getSuccessMessage = () => ({message: `${countryId} removed`})

    Country.getById(countryId)
      .then(ottomanPromises.remove)
      .then(getSuccessMessage)
      .then(res.ok)
      .catch(next)
  }
}

module.exports = CountryController
