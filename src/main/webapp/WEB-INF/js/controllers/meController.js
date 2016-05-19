var meModule = angular.module('meModule',[]);
meModule.controller('meController',function($scope, $rootScope){
	$rootScope.activeMenuId = '3';
	$scope.init = function(){
		$scope.welcome = 'Welcome To Kerwin\'s world';
	};
});