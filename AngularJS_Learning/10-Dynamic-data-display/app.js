angular.module('myApp', [])
    .controller('MyCtrl', function ($scope){
        $scope.todos = [
            {name:'Eating', isChecked: false},
            {name:'Sleeping', isChecked: false},
            {name:'Working', isChecked: false},
        ];
        $scope.add = function (){
            if(!$scope.newTodo) {
                alert('Content can not be empty');
                return;
            }
            var obj = {
                name: $scope.newTodo,
                isChecked: false
            };
            $scope.todos.unshift(obj);
        }

        // $scope.del = function (){
        //     $scope.todos.forEach(function (item,index){
        //         if(item.isChecked)
        //         {
        //             $scope.todos.splice(index, 1);
        //             $scope.del();
        //         }
        //     })
        // }
        $scope.del = function (){
            var oldTodo = $scope.todos;
            $scope.todos = [];
            oldTodo.forEach(function (item, index){
                if(!item.isChecked)
                {
                    $scope.todos.push(item);
                }
            })
        }
    })