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
            $scope.formData.flag = false;
    $scope.formData.resp = {};
        console.log($scope.formData.search);
        $http.post('/api/todos', $scope.formData).then(
            function successCallback(response) {
                console.log(response);
                $scope.formData.flag = true;
                $scope.formData.resp = response.data.hits.hits;
                console.log($scope.formData.resp);
            }, function errorCallback(response) {
                console.log('ERROR:' + response)
            }
        );
    };

    $scope.renderFinish = function() {
        console.log('渲染完之后的操作');
        console.log($('li').highlight($("input").val()));
        console.log($("input").val());
}

})

.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            console.log(scope.$index)
            if(scope.$last == true){
                console.log('ng-repeat执行完毕')
                scope.$eval( attr.repeatFinish )
            }
        }
    }
});



