'use strict'

var Hapi = require('hapi')
var server = new Hapi.Server()
var config = require('./config')
var tasksService = require('./index')
var validate = require('./lib/validateJWT')
var yarOptions = {
  storeBlank: false,
  cookieOptions: {
    password: config.YAR_SECRET,
    isSecure: true
  }
}

server.connection({
  port: config.SERVER_PORT,
  routes: {
    cors: true
  }
})

server.register([
  {
    register: tasksService,
    options: {}
  },
  require('vision'),
  require('inert'),
  {
    register: require('lout')
  }
], function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err)
  }
})

server.register(require('hapi-auth-jwt2'), function (err) {

  if(err){
    console.log(err);
  }

  server.auth.strategy('jwt', 'jwt',
    { key: config.JWT_SECRET,          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    })

  server.auth.default('jwt')
})

server.register({
  register: require('yar'),
  options: yarOptions
}, function (err) {
  if(err){
    console.log(err)
  }
})

function startServer () {
  server.start(function () {
    console.log('Server running at:', server.info.uri)
  })
}

function stopServer () {
  server.stop(function () {
    console.log('Server stopped')
  })
}

module.exports.start = startServer

module.exports.stop = stopServer
