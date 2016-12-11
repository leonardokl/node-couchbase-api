let ottoman = require('ottoman')
const {bucket} = require('../index')
const promisifyModel = require('../lib/promisify-model')
const Country = require('./country')

ottoman.bucket = bucket

const Customer = ottoman.model('Customer', {
	'username': {type: 'string', readonly: true},
	'firstName': 'string',
	'lastName': 'string',
	'created': 'Date',
	'billingAddress': {
		'country': Country,
		'state': 'string',
		'city': 'string',
		'line1': 'string',
		'postalCode': 'string'
	},
	'updated': 'Date',
	'email': 'string'
}, {
	id: 'username'
})

module.exports = promisifyModel(Customer)
