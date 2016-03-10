/**
 * Created by kerwin on 16/2/23.
 */
var homeModule = angular.module('homeModule',[]);
var homeController = homeModule.controller('homeController',['$scope','$http',function($scope, $http){
    $scope.currentMenuName = '我';
    $scope.currentJobName = '朗新科技股份有限公司';

    $http.post('/findAllMenus').success(function(data){
        $scope.menuItems = data;
        $scope.activeMenu = 'active';
    });

    $http.post('/findAllJobs').success(function(data){
        $scope.jobs = data;
    });

    $scope.menuClick = function(menuName){
        $scope.currentMenuName = menuName;
    };
    $scope.chooseJob = function(jobName){
        $scope.currentJobName = jobName;
    };

}]);
