angular.module('Todo.controllers')
  .controller('TodoCtrl', ['TodoService', '$scope', '$http', (TodoService, $scope, $http) => {

    const init = () => {
      $scope.todos = TodoService.query();
    };
    init();

    $scope.createTodo = () => {
      TodoService.save($scope.todo, () => {
        init();
      })
    };

    $scope.deleteTodo = (todo) => {
     TodoService.remove({id:todo._id}, () => {
         $scope.todos.splice($scope.todos.indexOf(todo), 1);
     })
    };

    $scope.edit = (id) => {
      TodoService.get({id:id}, (res) => {
          $scope.todo = res;
      })
    };

    $scope.updateTodo = () => {
      TodoService.update($scope.todo, () => {
        $scope.todo = '';
        init();
      })
    }
  }]);