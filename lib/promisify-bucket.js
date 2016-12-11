const Promise = require('bluebird')

const promisifyBucket = (bucket) => {
  const promisify = (fn) => Promise.promisify(fn, {context: bucket})

  bucket.get = promisify(bucket.get)
  bucket.insert = promisify(bucket.insert)
  bucket.replace = promisify(bucket.replace)
  bucket.remove = promisify(bucket.remove)
  bucket.query = promisify(bucket.query)

  return bucket
}

module.exports = promisifyBucket
