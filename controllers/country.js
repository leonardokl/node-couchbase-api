const Country = require('../models/country')
const ottomanPromises = require('../lib/ottoman-promises')
const pagination = require('../lib/pagination')

const CountryController = {
  index(req, res, next) {
    const {limit, skip} = req.query
    const options = {limit, skip}
    const filters = {_type: 'Country'}

    Promise.all([
      Country.find(filters, options),
      Country.count(filters, {})
    ]).then((response) => {
      const [countries, count] = response

      pagination.addHeaders({res, count, options})

      return countries
    }).then(res.ok).catch(next)
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

  removeById(req, res, next) {
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
