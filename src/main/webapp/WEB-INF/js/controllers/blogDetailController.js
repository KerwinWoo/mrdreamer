var blogDetailModule = angular.module('blogDetailModule',[]);
blogDetailModule.controller('blogDetailController', function($scope,$http,$compile,$stateParams){
	$scope.likeBtnClicked = false;
	$scope.isCommentInputShow = false;
	$scope.commentContent = '';
	$scope.commentsNum = 0;
	$scope.videoPath = basePath + '/media/yulu.flv';
	$scope.init = function(){
		$scope.loadBlogDetailInfo();
		$scope.loadBlogComments();
	};
	$scope.loadBlogDetailInfo = function(){
		$http.post(basePath+'/blog/detail/'+$stateParams.blogId).success(function(res){
			if(res && res.data){
				$scope.blog = res.data.blog;
				angular.element(document.querySelector('#blogContent')).html(res.data.blog.content);
			}
		}).error(function(err){
			alert(err);
		});
	};
	$scope.loadBlogComments = function(){
		$http.post(basePath+'/blog/comments/'+$stateParams.blogId).success(function(res){
			if(res && res.data){
				if(res && res.data){
					$scope.comments = res.data.blogComments;
					$scope.commentsNum = $scope.comments.length;
				}
			}
		}).error(function(err){
			alert(err);
		});
	};
	$scope.addComment = function(){
		$http.post(basePath+'/blog/comments/add/',{
			blogid:$stateParams.blogId,
			username:'kerwin',
			content:$scope.commentContent
		}).success(function(res){
			if(res && res.data){
				if(res && res.data){
					$scope.comments = res.data.blogComments;
				}
				$scope.loadBlogComments();
				$scope.commentContent = '';
				$scope.isCommentInputShow = false;
				$scope.commentsNum++;
			}
		}).error(function(err){
			alert(err);
		});
	};
	$scope.addCommentLike = function(){
		$scope.likeBtnClicked = true;
		$scope.blog.fav++;
		$http.post(basePath+'/blog/fav',{
			fav:$scope.blog.fav,
			id:$stateParams.blogId
		}).success(function(res){
		}).error(function(err){
			alert(err);
		});
	};
});