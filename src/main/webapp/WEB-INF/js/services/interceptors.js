var interceptorModule = angular.module('interceptorModule',[]);
interceptorModule.factory('httpInterceptor', function($q,$rootScope) {
         return {
           // optional method
           'request': function(config) {
        	   $rootScope.isLoading = true;
        	   return config;
           },
           // optional method
          'requestError': function(rejection) {
        	 $rootScope.isLoading = false;
             if (canRecover(rejection)) {
               return responseOrNewPromise
             }
             return $q.reject(rejection);
           },
           // optional method
           'response': function(response) {
        	 $rootScope.isLoading = false;
             return response;
           },
           // optional method
          'responseError': function(rejection) {
        	 $rootScope.isLoading = false;
             // do something on error
             if (canRecover(rejection)) {
               return responseOrNewPromise
             }
             return $q.reject(rejection);
           }
         };
});