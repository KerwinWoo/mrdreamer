var blogOverviewModule = angular.module('blogOverviewModule',[]);
blogOverviewModule.controller('blogOverviewController', function($scope,$rootScope,$http){
	$scope.start = 0;
	$scope.rows = 10;
	$scope.type = '技术';
	$scope.blogs = [];
	$scope.init = function(){
		$scope.defaultImgUrl = basePath+'/img/default-img.png';
		$scope.loadBlogTypes();
		$scope.loadBlogs();
	};
	$scope.changeToSubMenu = function(menuName){
		$scope.type = menuName;
		$scope.loadBlogs();
	};
	/**
	 * @description 分页加载博客信息
	 * @param start 分页开始行
	 * @param type 博客类型
	 * @param rows 单页行数
	 */
	$scope.loadBlogs = function(){
		$http.post(basePath+'/blog/overview/'+$scope.type,{
			start:$scope.start,
			rows:$scope.rows
		}).success(function(res){
			if(res){
				var returnCode = res.returnCode;
				var blogs = res.data.blogs;
				if(returnCode == "0" && blogs && blogs.length > 0){
					$scope.blogs = blogs;
				}
				else{
					$scope.blogs = [];
				}
				
			}
		}).error(function(err){
			alert(err);
		});
	};
	
	$scope.loadBlogTypes = function(){
		$http.post(basePath+'/blog/getAllBlogTypes').success(function(res){
			if(res){
				$scope.submenus = res;
			}
		}).error(function(err){
			alert(err);
		});
	};
});