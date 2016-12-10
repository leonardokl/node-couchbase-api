const Country = require('../model/country')

const countryController = {
  index(req, res) {
    res.status(500).json({error: 'cound not list'})
  },

  create(req, res) {
    res.status(500).json({error: 'could not create'})
  },

  getByID(req, res) {
    const {countryID} = req.params;

    Country.getByID(countryID)
      .then(result => res.status(200).json(result.value))
      .catch(err => res.status(404).json({error: `${countryID} not found`}))
  },

  remove(req, res) {
    res.status(500).json({error: 'could not remove'})
  }
}

module.exports = countryController
