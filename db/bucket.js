const couchbase = require('couchbase')
const {bucketName, bucketPassword, urls} = require('../config/couchbase')

const cluster = new couchbase.Cluster(urls)
const bucket = cluster.openBucket(bucketName, bucketPassword, (err) => {
  if (err) throw err
})

module.exports = bucket
