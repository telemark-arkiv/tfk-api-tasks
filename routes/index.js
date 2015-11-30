'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'List all politicians'
    }
  }
]

module.exports = routes
