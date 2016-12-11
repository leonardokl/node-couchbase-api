let ottoman = require('ottoman')
const {bucket} = require('../index')
const promisifyModel = require('../lib/promisify-model')

ottoman.bucket = bucket

const Country = ottoman.model('Country', {
	countryCode: {type: 'string', readonly: true},
	gdp: 'number',
	name: 'string',
	updated: 'Date',
	population: 'number',
  'region-number': 'number'
}, {
	id: 'countryCode'
})

module.exports = promisifyModel(Country)
