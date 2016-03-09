/**
 * Created by kerwin on 16/2/23.
 */
var indexModule = angular.module('indexModule',[]);
indexModule.controller('indexController',['$scope','$http',function($scope, $http){
    $http.get('data/menu.json').success(function(data) {
        $scope.menuItems = data.items;

        /*事件*/
        $scope.goToHomePage = function(){
            window.location.href = '/home';
        };
    });
}]);


/*var indexModule = angular.module("IndexModule",[]);
var indexCtrl = indexModule.controller("IndexCtrl", ["$scope","$http",
    function($scope, $http) {
        $http.get('data/menu.json').success(function(data) {
            $scope.menuItems = data.items;
        });
    }]);*/
