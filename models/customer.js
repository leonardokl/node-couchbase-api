const couchbase = require('couchbase')
const uuid = require('node-uuid')
const {bucket} = require('../index')
const couchbaseConfig = require('../config/couchbase')
const n1qlQuery = couchbase.N1qlQuery
const entitie = 'customer'
const createID = (id) => `${entitie}::${id}`

const Customer = {
  getAll() {
    const query = n1qlQuery.fromString(
      `SELECT * FROM ${couchbaseConfig.bucketName} WHERE type="${entitie}"`
    )

    return bucket.query(query).then(
      response => response.map(item => item[couchbaseConfig.bucketName])
    )
  },

  create(data) {
    const id = uuid.v4()
    const country = Object.assign(data, {id, type: entitie})

    return bucket.insert(createID(id), country).then(() => country)
  },

  updateByID(countryID, data) {
    return bucket.replace(createID(countryID), data).then(() => data)
  },

  getByID(countryID) {
    return bucket.get(createID(countryID))
  },

  removeByID(countryID) {
    return bucket.remove(createID(countryID))
  }
}

module.exports = Customer
