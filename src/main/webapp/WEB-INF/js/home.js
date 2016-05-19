var app = angular.module('app',['ui.router','welcomeModule']);
app.controller('homeController',function($scope){
	$scope.audio = document.getElementById('bgmAudio');
	$scope.audio.src = basePath + '/music/bgm-songbie.mp3';
	$scope.musicOn = true;
	$scope.toggleAudio = function(){
		$scope.musicOn = !($scope.musicOn);
		if(!$scope.musicOn){
			$scope.audio.pause();
		}
		else{
			$scope.audio.play();
		}
	};

});
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/welcome');
	$stateProvider.state('welcome', {
      url: '/welcome',
      templateUrl: basePath + '/templates/welcome.html',
      controller:'welcomeController'
	})
	.state('photos', {
      url:'/photos',
      templateUrl: basePath + '/templates/photos.html'
	})
	.state('welcome.sub1', {
      url:'/sub1',
      templateUrl: basePath + '/templates/sub.html'
	})
});