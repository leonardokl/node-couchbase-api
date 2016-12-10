const express = require('express')
const couchbase = require('couchbase')
const uuid = require('node-uuid')
const bodyParser = require('body-parser')

const promisifyBucket = require('./lib/promisify-bucket')
const serverConfig = require('./config/server')
const couchbaseConfig = require('./config/couchbase')

const app = express()
const cluster = new couchbase.Cluster(couchbaseConfig.urls)
const bucket = promisifyBucket(cluster.openBucket(
  couchbaseConfig.bucketName,
  couchbaseConfig.bucketPassword
))

module.exports.bucket = bucket

app.use(bodyParser.json())

require('./router')(app)

app.listen(serverConfig.port, (err) => err ?
  console.log(err) :
  console.log(`Server running on port ${serverConfig.port}`)
)
