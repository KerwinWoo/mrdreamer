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