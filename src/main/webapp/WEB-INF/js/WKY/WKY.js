(function(){
	window.WKY = {
			getElementById:function(id){
				return document.getElementById(id);
			},
			ajax:function(option){
				var xhr = new XMLHttpRequest;
				xhr.open(option.url,option.type,option.async);
				xhr.onreadystatuschange = function(){
					if(xhr.status){}
				};
			}
	};
})();