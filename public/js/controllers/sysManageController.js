/**
 * Created by kerwin on 16/3/13.
 */
var sysManageModule = angular.module('sysManageModule',['jobServiceModule']);
sysManageModule.controller('sysManageController',['$scope', '$http', 'jobService',
    function($scope, $http, jobService){
        $scope.job = {
            compName: '1',
            fromDate: '2',
            toDate: '3',
            desc: '4',
            skills: '5'
        };
    $scope.saveJob = function(){
        jobService.saveJob($scope.job);
    };
}]);