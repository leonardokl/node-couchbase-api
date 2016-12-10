const uuid = require('node-uuid')
const bucket = require('../index').bucket
const entitie = 'customer'
const createID = (id) => `${entitie}::${id}`

const Country = {
  create(data) {
    const id = uuid.v4()
    const country = Object.assign(data, {id})

    return bucket.insert(createID(id), country).then(response => country)
  },

  updateByID(countryID, data) {
    return bucket.replace(createID(countryID), data).then(response => data)
  },

  getByID(countryID) {
    return bucket.get(createID(countryID))
  },

  removeByID(countryID) {
    return bucket.remove(createID(countryID))
  }
}

module.exports = Country
