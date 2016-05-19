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