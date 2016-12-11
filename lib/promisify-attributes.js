const {promisify} = require('bluebird')

const promisifyAttributes = (object = {}, attributes = []) => {
  const promisifyWithObjectContext = (attribute) => promisify(attribute, {
    context: object
  })
  const addPromisifiedAttribute = (previousValue, currentValue) =>
    Object.assign(previousValue, {
      [currentValue]: promisifyWithObjectContext(object[currentValue])
    })
  const promisifiedAttributes = attributes.reduce(addPromisifiedAttribute, {})

  return Object.assign(object, {promisifiedAttributes})
}

module.exports = promisifyAttributes
