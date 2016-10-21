angular.module('Todo.services')
  .factory('TodoService', ['$resource', ($resource) => {
    return $resource('/api/todos/:id', {
        id: '@_id'
      },
      {
        update: {
          method: 'PUT'
        }
      })
  }]);