angular.module('myApp',[])
    .controller('MyCtrl', ['$scope', function ($scope){
        $scope.message = '';
        $scope.getCount = function (){
            console.log($scope.message);
            if($scope.message.length>100){
                $scope.message = $scope.message.slice(0, 100);
            }
            return 100 - $scope.message.length;
        }
        $scope.save = function (){
            alert('text already saved');
            localStorage.setItem('note_key',JSON.stringify($scope.message));
            $scope.message = ' ';
        }

        $scope.read = function (){
            $scope.message = JSON.parse(localStorage.getItem('note_key')||'[]');
        }

        $scope.remove = function (){
            localStorage.removeItem('note_key');
            $scope.message = '';
        }
    }]);