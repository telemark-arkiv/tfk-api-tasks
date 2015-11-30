'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 7, 'There are 7 different handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.getTasks, 'Handler has method getTasks')

tap.ok(handlers.searchTasks, 'Handler has method searchTasks')

tap.ok(handlers.getTask, 'Handler has method getTask')

tap.ok(handlers.addTask, 'Handler has method addTask')

tap.ok(handlers.updateTask, 'Handler has method updateTask')

tap.ok(handlers.deleteTask, 'Handler has method deleteTask')
