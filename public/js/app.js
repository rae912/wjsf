/**
 * Created by Administrator on 2016/4/11.
 */

//angular.module('myModule', ['ui.bootstrap']);

var App = angular.module("App", []);

App.controller("FirstCtrl", function ($scope) {
    $scope.data = {
        message: "Hello",
        flag: true
    };

    //在$scope上绑定一个函数
    $scope.onClick = function () {
        alert($scope.data.message);
    }

    $scope.list = [
        {
            name: "Harry"
        },
        {
            name: "Tom"
        },
        {
            name: "Jerry"
        }
    ];

    $scope.onClick = function (index) {
        alert("点击了第" + index + "行的按钮");
    };
});

App.filter("reverse", function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});

App.controller("Search", function ($scope) {
    $scope.searchText = '';

    $scope.list = [
        {
            name: "Harry",
            last:"m"
        },
        {
            name: "Tom"
        },
        {
            name: "Jerry"
        }
    ];
});
