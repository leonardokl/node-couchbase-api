const bucket = require('../index').bucket
const entitie = 'country'
const createID = (id) => `${entitie}::${id}`

const Country = {
  getByID(countryID) {
    return bucket.get(createID(countryID))
  }
}

module.exports = Country
