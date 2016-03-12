/**
 * Created by kerwin on 16/3/12.
 */
var jobServiceModule = angular.module('jobServiceModule',[]);
jobServiceModule.service('jobService',['$http',function($http){

    return {
        findAllJobs: function(){
            return $http.post('/findAllJobs');
        },
        findJobDetailById: function(jobId){
            return $http.post('/findJobDetailById');
        },
        saveJob: function(job){
            $http.post('/');
        }
    };

}]);