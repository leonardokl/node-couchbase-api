const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
const countryController = require('../controllers/country')

router.use(bodyParser.json())

router.route('/')
	.get(countryController.index)
	.post(countryController.create)

router.route('/:countryId')
	.get(countryController.getById)
  .put(countryController.updateById)
  .delete(countryController.remove)

module.exports = router
