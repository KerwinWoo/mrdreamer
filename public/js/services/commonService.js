/**
 * Created by kerwin on 16/3/12.
 */
var commonServiceModule = angular.module('commonServiceModule',[]);
commonServiceModule.service('commonService',['$http',function($http){

    return {
        findAllMenus: function(){
            return $http.post('/findAllMenus');
        }
    }

}]);