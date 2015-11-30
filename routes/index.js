'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'Nothing to see here'
    }
  },
  {
    method: 'GET',
    path: '/tasks',
    config: {
      handler: handlers.getTasks,
      description: 'List all tasks'
    }
  },
  {
    method: 'GET',
    path: '/tasks/search/{query}',
    config: {
      handler: handlers.searchTasks,
      description: 'List all tasks'
    }
  },
  {
    method: 'GET',
    path: '/tasks/{taskID}',
    config: {
      handler: handlers.getTask,
      description: 'Task details'
    }
  },
  {
    method: 'POST',
    path: '/tasks',
    config: {
      handler: handlers.addTask,
      description: 'Add task'
    }
  },
  {
    method: 'PUT',
    path: '/tasks/{taskID}',
    config: {
      handler: handlers.updateTask,
      description: 'Update task'
    }
  },
  {
    method: 'UPDATE',
    path: '/tasks/{taskID}',
    config: {
      handler: handlers.updateTask,
      description: 'Update task'
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/{taskID}',
    config: {
      handler: handlers.deleteTask,
      description: 'Delete task'
    }
  }
]

module.exports = routes
