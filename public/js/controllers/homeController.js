/**
 * Created by kerwin on 16/2/23.
 */
var homeModule = angular.module('homeModule',[]);
var homeController = homeModule.controller('homeController',['$scope','$http',function($scope, $http){

    $http.get('data/menu.json').success(function(data){
        $scope.menuItems = data.items;
        $scope.activeMenu = 'active';
        $scope.currentMenuId = 1;
        $scope.menuClick = function(menuId){
            console.log(menuId);
            $scope.currentMenuId = menuId;
        };
    });

    $http.post('/menu').success(function(data){
        $scope.subMenuItems = data;
    });

}]);
