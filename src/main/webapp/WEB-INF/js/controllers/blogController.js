var blogModule = angular.module('blogModule',[]);
blogModule.controller('blogController', function($scope,$rootScope,$http){
	$scope.init = function(){
		$rootScope.activeMenuId = '1';
	};
/*	$scope.$on('submsg',function(data){
		alert('我来自子类发出的信息'+ data.name);
		alert('我现在将他发送出去，并加上parent'+ data.name);
		$scope.$broadcast('parentMeg','parent' + data.name);
	});*/
});