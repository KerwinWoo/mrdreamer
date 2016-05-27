var app = angular.module('app',['ui.router','blogModule','blogOverviewModule',
                                'blogDetailModule','appsModule',
                                'appsCommunicatorModule','appsCanvasModule',
                                'meModule','interceptorModule']);
app.config(["$httpProvider", function($httpProvider) {
	//注册拦截器，添加request前和response后拦截方法
	$httpProvider.interceptors.push("httpInterceptor");
}]);
app.controller('mainController',function($scope,$rootScope){
	$rootScope.activeMenuId = '1';
	$rootScope.isModalShow = false;
	$rootScope.basePath = basePath;
	$scope.menus = [{
		id:'1',
		name: '博客',
		link: basePath+'/#/blog/overview'
	}, {
		id:'2',
		name: '小作品',
		link: basePath+'/#/apps'
	}, {
		id:'3',
		name: 'ME',
		link: basePath+'/#/me'
	}];
	$scope.changePage = function(menuId, link){
		if($rootScope.activeMenuId != menuId ){
			window.location = link;
		}
	};
	$scope.isMobileMenuShow = false;
	$scope.isHeaderShow = true;
});
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/blog/overview');
	$stateProvider.state('blog', {
      url: '/blog',
      templateUrl: basePath + '/templates/spa/blog.html',
      controller:'blogController'
	})
	.state('apps', {
      url:'/apps',
      templateUrl: basePath + '/templates/spa/apps.html',
      controller:'appsController'
	})
	.state('me', {
      url:'/me',
      templateUrl: basePath + '/templates/spa/me.html',
      controller:'meController'
	})
	.state('blog.overview',{
		url:'/overview',
	    templateUrl: basePath + '/templates/spa/blogOverview.html',
		controller:'blogOverviewController'
	})
	.state('blog.detail', {
      url:'/detail/:blogId',
      templateUrl: basePath + '/templates/spa/blogDetail.html',
      controller:'blogDetailController'
	})
	.state('apps.communicator', {
      url:'/communicator',
      templateUrl: basePath + '/templates/spa/appsCommunicator.html',
      controller:'appsCommunicatorController'
	})
	.state('apps.canvas', {
      url:'/canvas',
      templateUrl: basePath + '/templates/spa/appsCanvas.html',
      controller:'appsCanvasController'
	})
});
app.directive('loading', function(){
	return {
		restrict:'E',
		template:'<div class="loadingFrame" ng-show="isLoading">'+
					'<div class="outter">'+
						'<div class="ball ball-1"></div>'+
						'<div class="ball ball-2"></div>'+
						'<div class="ball ball-3"></div>'+
						'<div class="ball ball-4"></div>'+
						'<div class="inner">'+
							'<div class="ball ball-5"></div>'+
							'<div class="ball ball-6"></div>'+
							'<div class="ball ball-7"></div>'+
							'<div class="ball ball-8"></div>'+
						'</div>'+
					'</div>'+
				 '</div>',
		scope:false,
		link:function(scope, element, attrs){
		}
	}
});
app.directive('mobilenav',function(){
	return {
		restrict:'E',
		template:'<div class="mobileNavBar" ng-class="{true:\'slideFormRight\'}[isMobileMenuShow]">'+
					'<ul>'+
						'<li class="navbar-item" ng-repeat="menu in menus">'+
							'<a class="navbar-item-link" href="{{menu.link}}" ng-class="{true:\'active\'}[menu.id == activeMenuId]" ng-click="changeToMenu(menu.id);">{{menu.name}}</a>'+
						'</li>'+
					'</ul>'+
				  '</div>',
		link:function(scope, elem, attrs){
			
		}
	};
});
app.directive('scroll',function($window){
	return {
		restrict:'A',
		link:function(scope, ele, attrs){
		    angular.element($window).bind("mousewheel", function(e) {
		    	if(e.wheelDelta < 0){
		    		scope.isHeaderShow = false;
		    	}
		    	if(e.wheelDelta > 0){
		    		scope.isHeaderShow = true;
		    	}
	            scope.$apply();
	        });
		}
	};
});
app.directive('modalbox',function($rootScope){
	return{
		restrict:'AE',
		templateUrl:basePath + '/templates/spa/modalBox.html',
		link:function(scope,ele,attrs){
		}
	};
});
app.filter('firstTwoWordFilter',function(){
	return function(item){
		if(typeof item == 'string'){
			if(item.length > 2){
				return item.substring(0,2);
			}
			else{
				return item;
			}
		}
		else{
			return '';
		}
	}
});