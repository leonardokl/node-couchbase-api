const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
const countryController = require('../controller/country')

router.use(bodyParser.json())

router.route('/')
	.get(countryController.index)
	.post(countryController.create)

router.route('/:countryID')
	.get(countryController.getByID)
  .delete(countryController.remove)

module.exports = router
