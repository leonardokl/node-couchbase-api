const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
const customerController = require('../controller/customer')

router.use(bodyParser.json())

router.route('/')
	.get(customerController.index)
	.post(customerController.create)

router.route('/:customerID')
	.get(customerController.getByID)
	.put(customerController.updateByID)
	.delete(customerController.removeByID)

module.exports = router
