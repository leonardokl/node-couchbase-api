module.exports = {
  urls: process.env.COUCHBASE_URLS || '127.0.0.1:8091',
  bucketName: process.env.COUCHBASE_BUCKET_NAME || 'customer360',
  bucketPassword: process.env.COUCHBASE_BUCKET_PASSWORD || '123456'
}
