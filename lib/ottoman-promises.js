const Promise = require('bluebird')

const OttomanPromises = {
  save: (model) => {
    return Promise.promisify(model.save, {context: model})()
      .then(() => model)
  },

  remove: (model) => Promise.promisify(model.remove, {context: model})()
}

module.exports = OttomanPromises
