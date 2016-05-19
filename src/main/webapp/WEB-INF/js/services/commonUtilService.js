var commonUtilServiceModule = angular.module('commonUtilServiceModule',[]);
commonUtilServiceModule.service('commonUtilService',function(){
	return {
		getRandomColor:function(){
			return '#'+(Math.random()*0xffffff<<0).toString(16);
		},
		getRandomNum:function(start, end){
			var gap = end - start;
			return parseInt(Math.random()*gap + start);
		}
	};
});
