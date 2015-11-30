'use strict'

function getFrontpage (request, reply) {
  reply({
    message: 'nothing to see here! go home'
  })
}

module.exports.getFrontpage = getFrontpage
