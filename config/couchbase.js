module.exports = {
  urls: '127.0.0.1:8091' || process.env.COUCHBASE_URLS,
  bucketName: 'customer360' || process.env.COUCHBASE_BUCKET_NAME,
  bucketPassword: '123456' || process.env.COUCHBASE_BUCKET_PASSWORD
}
