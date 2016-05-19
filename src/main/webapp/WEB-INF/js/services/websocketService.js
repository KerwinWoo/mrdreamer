var websocketModule = angular.module('websocketModule',[]);
websocketModule.service('websocketService',function(){
	var socket = io.connect('ws://localhost:3000');
	return {
		sendMessage:function(messageType, message){
			socket.emit(messageType, message);
		}
	};
});

function messageChange(res){
	 $scope.$apply(function() {  
         $scope.message = res;   
     });  
}

socket.on('server message', messageChange);