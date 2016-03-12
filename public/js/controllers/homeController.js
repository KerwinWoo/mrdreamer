/**
 * Created by kerwin on 16/2/23.
 */
var homeModule = angular.module('homeModule',['commonServiceModule','jobServiceModule']);
var homeController = homeModule.controller('homeController',['$scope','$http','commonService','jobService',
    function($scope, $http, commonService, jobService){
        $scope.currentMenuName = '我';
        $scope.currentJobName = '朗新科技股份有限公司';

        jobService.findAllJobs().success(function(data){
            $scope.jobs = data;
        });
        commonService.findAllMenus().success(function(data){
            $scope.menuItems = data;
            $scope.activeMenu = 'active';
        });

        $scope.menuClick = function(menuName){
            $scope.currentMenuName = menuName;
        };
        $scope.chooseJob = function(jobName){
            $scope.currentJobName = jobName;
        };
    }
]);
