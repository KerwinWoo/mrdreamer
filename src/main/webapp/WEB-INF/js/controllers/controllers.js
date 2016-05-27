var appsCanvasModule = angular.module('appsCanvasModule',[]);
appsCanvasModule.controller('appsCanvasController',function($scope){
	$scope.$parent.isStage = true;
	$scope.init = function(){
		var option = {
				xValues:[1,2,3,4,5,6,7],
				yValues:[3,45,23,20,15,34,23],
				type:'column',
				color:'#ddd'
		};
		var echart = document.getElementById('echart');
		$scope.drawEchart(echart, option);
	};
	$scope.drawEchart = function(dom, option){
		var canvas = document.createElement('canvas');
		var canvasWidth = parseInt(dom.style.width)
		var canvasHeight = parseInt(dom.style.height)
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		dom.appendChild(canvas);
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(0,canvasHeight);
		ctx.lineTo(canvasWidth, canvasHeight);
		ctx.moveTo(0,canvasHeight);
		ctx.lineTo(0,0);
		//x轴刻度个数
		var xNum = option.xValues.length;
		var xGap = Math.floor(canvasWidth/xNum);
		ctx.font="20px Verdana";
		for(var i = 1; i <= xNum; i++){
			ctx.moveTo(xGap*i,canvasHeight);
			ctx.lineTo(xGap*i,canvasHeight - 5);
			ctx.fillText(option.xValues[i - 1],xGap*i - 5,canvasHeight);
		}
		ctx.stroke();
	};
});
var appsCommunicatorModule = angular.module('appsCommunicatorModule',[]);
appsCommunicatorModule.controller('appsCommunicatorController',function($scope,$rootScope){
	$scope.messageGroupList = [];
	$scope.messageList = [];
	$scope.input = '';
	$scope.isSelectorOpen = false;
	$scope.currentMessageGroupName = '请选择';
	var socket = io.connect('ws://192.168.1.107:3000/8place');
	$scope.init = function(){
		$scope.loadAllMessageGroup();
		$scope.$parent.isStage = true;
	};
	
	/************处理页面事件************/
	$scope.sendMessage = function(){
		if($scope.input && $scope.input.trim()){
			socket.emit('client message', {
				msgFrom : 'kerwin',
				content : $scope.input,
				msgGroup : '1'
			});
			$scope.input = '';
		}
	};
	$scope.checkAndSendMessage = function(e){
		if(e.keyCode == 13){
			e.preventDefault();
			$scope.sendMessage();
		}
	};
	$scope.changeMessageGroup = function(groupId, groupName){
		$scope.currentMessageGroupName = groupName;
		$scope.loadAllHistoryMessage(groupId);
		$scope.isSelectorOpen = false;
	};
	/************处理页面事件************/
	
	/************向websocket服务器端发送信息************/
	/**
	 * 发送加载所有群组信息的请求
	 */
	$scope.loadAllMessageGroup = function(){
		socket.emit('load message groups');
	};
	/**
	 * 发送加载相应群组的聊天历史记录请求
	 */
	$scope.loadAllHistoryMessage = function(groupId){
		socket.emit('load history message',{
			groupId : groupId
		});
	};
	/************向websocket服务器端发送信息************/
	
	
	/************处理websocket服务器端响应************/
	/**
	 * 服务器端返回群组信息
	 */
	socket.on('server message groups', function(res){
		//手动触发视图更新
		 $scope.$apply(function() { 
			 $scope.messageGroupList = $scope.messageGroupList.concat(res);
	     }); 
	});
	/**
	 * 服务器端返回常规信息(比如其他人发送的消息)
	 */
	socket.on('server message', function(res){
		 $scope.$apply(function() { 
			 if(res){
				 if(res.msgFrom == 'kerwin'){
					 res.isSelfMsg = true;
				 }
				 else{
					 res.isSelfMsg = false;
				 }
				 $scope.messageList.push(res);
			 }
	     }); 
	});
	/**
	 * 服务器端返回历史信息
	 */
	socket.on('server history message', function(res){
		if(res && res.length > 0){
			$scope.$apply(function() { 
				for(var i = 0; i < res.length; i++){
					var msg = res[i];
					if(msg.msgFrom == 'kerwin'){
						msg.isSelfMsg = true;
					}
					else{
						msg.isSelfMsg = false;
					}
					$scope.messageList.push(msg);
				}
			}); 
		}
		else{
			$scope.$apply(function(){
				$scope.messageList = [];
			});
		}
	});
	/************处理websocket服务器端响应************/
	
});
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
var blogDetailModule = angular.module('blogDetailModule',[]);
blogDetailModule.controller('blogDetailController', function($scope,$http,$compile,$stateParams){
	$scope.likeBtnClicked = false;
	$scope.isCommentInputShow = false;
	$scope.commentContent = '';
	$scope.commentsNum = 0;
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
var meModule = angular.module('meModule',[]);
meModule.controller('meController',function($scope, $rootScope){
	$rootScope.activeMenuId = '3';
	$scope.init = function(){
		$scope.welcome = 'Welcome To Kerwin\'s world';
	};
});