var appsModule = angular.module('appsModule',['commonUtilServiceModule']);
appsModule.controller('appsController',function($scope,$rootScope,commonUtilService){
	$scope.init = function(){
		$rootScope.activeMenuId = '2';
		$scope.isStage = false;
		$scope.tags = [{
			id:'1',
			name:'NodeJs+SocketI0实现消息推送',
			link:basePath+'/#/apps/communicator'
		},{
			id:'2',
			name:'Canvas画Echarts风格图表',
			link:basePath+'/#/apps/canvas'
		}];
		for(var i = 0; i < 20; i++){
			$scope.tags.push({
				id:'1',
				name:'小作品' + (i+1),
				link:basePath+'/#/apps/communicator'
			});
		}
		for(var i = 0; i < $scope.tags.length; i++){
			var randomDelay = 0;
			if(i > 5){
				randomDelay = Math.floor(Math.random()*5)
			}
			$scope.tags[i].style = {
					color:commonUtilService.getRandomColor(),
					top:commonUtilService.getRandomNum(10,60)+'%',
					left:commonUtilService.getRandomNum(20,80)+'%',
					animation:'wordcloud 8s linear infinite ' + randomDelay + 's'
			};
		}
	};
	$scope.showApp = function(id){
		$scope.isStage = true;
	};
});