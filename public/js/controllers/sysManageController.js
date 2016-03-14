/**
 * Created by kerwin on 16/3/13.
 */
var sysManageModule = angular.module('sysManageModule',['jobServiceModule']);
sysManageModule.controller('sysManageController',['$scope', '$http', 'jobService',
    function($scope, $http, jobService){

        $scope.job = {
            name: '1',
            fromDate: '2',
            toDate: '3',
            desc: '4',
            skills: '5'
        };
        $scope.findAllJobs = function(){
            jobService.findAllJobs().success(function(data){
                $scope.jobs = data;
                console.log(data);
            });
        };

        $scope.findAllJobs();
        //-----事件方法------//
        $scope.addJob = function(){
            jobService.addJob($scope.job);
        };
        $scope.deleteJob = function(jobId){
            jobService.deleteJobById(jobId).success(function(){
                console.log('success');
            }).error(function(){ss
                console.log('error');
            });
        };
        $scope.updateJob = function(jobId){
        };
        //-----事件方法------//
}]);