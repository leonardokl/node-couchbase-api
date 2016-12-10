const countryRoutes = require('./country')
const customerRoutes = require('./customer')

const router = (app) => {
  app.use('/api/v1/countries', countryRoutes),
  app.use('/api/v1/customers', customerRoutes)
}

module.exports = router
