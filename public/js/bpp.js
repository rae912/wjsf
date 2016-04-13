/**
 * Created by Administrator on 2016/4/11.
 */

var Bpp = angular.module("Bpp", []);

Bpp.directive("people", function(){
    return {
        restrict: "E",
        template : "<p>姓名:{{data.name}}</p><p>性别：{{data.sex}}</p>"
    }
});

Bpp.controller("Ctrl", function ($scope) {
    $scope.data = {
        name: "Harry",
        sex : "男"
    };
});