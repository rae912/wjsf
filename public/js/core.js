/**
 * Created by Administrator on 2016/4/12.
 */
var scotchTodo = angular.module('scotchTodo', []);

scotchTodo.controller("mainController", function($scope, $http) {
    $scope.formData = {};
    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {
            $scope.todos = data;
            console.log('OK');
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function () {
        console.log($scope.formData.search);
        $http.post('/api/todos', $scope.formData).then(
            function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log('ERROR:' + response)
            }
        );
    };
});