'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 1, 'There are 1 handler')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')
