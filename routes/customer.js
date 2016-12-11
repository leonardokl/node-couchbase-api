const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
const customerController = require('../controllers/customer')

router.use(bodyParser.json())

router.route('/')
	.get(customerController.index)
	.post(customerController.create)

router.route('/:customerId')
	.get(customerController.getById)
	.put(customerController.updateById)
	.delete(customerController.removeById)

module.exports = router
