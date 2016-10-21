angular.module('Todo.services', []);
angular.module('Todo.controllers', []);

angular.module('Todo', [
  'ngRoute',
  'ngResource',
  'Todo.services',
  'Todo.controllers'
]);