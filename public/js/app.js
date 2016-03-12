/**
 * Created by kerwin on 16/2/23.
 * 前端页面入口文件。通过路由设置对请求做分发
 */
var angularApp = angular.module('app', ['ngRoute','homeModule']);
angularApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/me', {
        controller:'homeController',
        templateUrl: '../views/templates/jobDetail.html'
    }).otherwise({
        templateUrl: '../views/404.html'
    });
}]);
