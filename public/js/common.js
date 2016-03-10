/**
 * Created by kerwin on 16/2/23.
 */
var angularApp = angular.module('app', ['ngRoute','indexModule']);

angularApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/#me', {
        templateUrl: 'templates/jobDetail.jade',
        controller:'Ctrl01'
    }).otherwise({
            redirectTo: '/'
        });
}]);
