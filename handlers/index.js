'use strict'

function getFrontpage (request, reply) {
  reply({
    message: 'nothing to see here! go home'
  })
}

function getTasks (request, reply) {
  reply({
    message: 'getTasks - Not yet implemented'
  })
}

function searchTasks (request, reply) {
  reply({
    message: 'searchTasks - Not yet implemented'
  })
}

function getTask (request, reply) {
  reply({
    message: 'getTask - Not yet implemented'
  })
}

function addTask (request, reply) {
  reply({
    message: 'addTask - Not yet implemented'
  })
}

function updateTask (request, reply) {
  reply({
    message: 'updateTask - Not yet implemented'
  })
}

function deleteTask (request, reply) {
  reply({
    message: 'deleteTask - Not yet implemented'
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.getTasks = getTasks

module.exports.searchTasks = searchTasks

module.exports.getTask = getTask

module.exports.addTask = addTask

module.exports.updateTask = updateTask

module.exports.deleteTask = deleteTask
