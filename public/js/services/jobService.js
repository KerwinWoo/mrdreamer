/**
 * Created by kerwin on 16/3/12.
 */
var jobServiceModule = angular.module('jobServiceModule',[]);
jobServiceModule.service('jobService',['$http',function($http){

    return {
        findAllJobs: function(){
            return $http.post('/sys/findAllJobs');
        },
        findJobDetailById: function(jobId){
            return $http.post('/sys/findJobDetailById');
        },
        addJob: function(job){
            $http.post('/sys/addJob',{job:job});
        },
        deleteJobById: function(jobId){
            return $http.post('/sys/deleteJobById',{id:jobId});
        }
    };

}]);