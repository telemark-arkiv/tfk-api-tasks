'use strict'

var mongojs = require('mongojs')
var config = require('../config')
var db = mongojs(config.DB_CONNECTION)
var tasks = db.collection('tasks')

function getFrontpage (request, reply) {
  reply({
    message: 'nothing to see here! go home',
    whoami: request.session.get('whoami')
  })
}

function getTasks (request, reply) {
  var whoami = request.session.get('whoami')
  var uid = whoami.uid
  tasks.find({'uid': uid},
    function findTasks (error, data) {
      reply(error || data)
    }
  )
}

function searchTasks (request, reply) {
  var whoami = request.session.get('whoami')
  var uid = whoami.uid
  tasks.find({'uid': uid, '$text': {'$search': request.params.searchText}},
    function findTasks (error, data) {
      reply(error || data)
    }
  )
}

function getTask (request, reply) {
  var whoami = request.session.get('whoami')
  var uid = whoami.uid
  var taskID = mongojs.ObjectId(request.params.taskID)
  tasks.find({'_id': taskID, 'uid': uid},
    function findTasks (error, data) {
      reply(error || data)
    }
  )
}

function addTask (request, reply) {
  var now = new Date()
  var payload = request.payload
  payload.createdAt = now
  payload.modifiedAt = now
  tasks.save(payload, function (error, data) {
    reply(error || data)
  })
}

function updateTask (request, reply) {
  var taskID = mongojs.ObjectId(request.params.taskID)
  var payload = request.payload
  payload.modifiedAt = new Date()
  tasks.update({'_id': taskID}, {$set: payload}, function (error, data) {
    reply(error || data)
  })
}

function deleteTask (request, reply) {
  var taskID = mongojs.ObjectId(request.params.taskID)
  tasks.remove({'_id': taskID},
    function deleteTask (error, data) {
      reply(error || data)
    }
  )
}

module.exports.getFrontpage = getFrontpage

module.exports.getTasks = getTasks

module.exports.searchTasks = searchTasks

module.exports.getTask = getTask

module.exports.addTask = addTask

module.exports.updateTask = updateTask

module.exports.deleteTask = deleteTask
