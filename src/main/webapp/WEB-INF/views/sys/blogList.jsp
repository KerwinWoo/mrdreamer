<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<title>白日梦想家管理平台</title>
<style>
	body,ul,li{
		margin:0;
		padding:0;
	}
	ul li{
		list-style:none;
	}
	.clearfix:after{
		content:'';
		display:block;
		height:0;
		visibility:hidden;
		clear:both;
	}
	.blog-item{
		float:left;
		padding:5px;
		display:inline-block;
		text-align:center;
		background:#ddd;
		color:#666;
	}
	.col1{
		width:60%;
	}
	.col2{
		width:30%;
	}
	.col-end a:hover{
		cursor:pointer;
		color:red;
	}
	.add-btn{
		padding:5px 0;
		background:#3CB8B2;
		color:#fff;
		border:1px solid #ddd;
		text-align:center;
	}
	.add-btn:hover{
		cursor:pointer;
	}
</style>
<script>
	var basePath = '<%=basePath%>';
</script>
</head>
<body>
	<div class="add-btn" onclick="add();">新增博客</div>
	<ul id="blogList" class="clearfix">
		<li class="col1 blog-item">
			<span>标题</span>
		</li>
		<li class="col2 blog-item">
			<span>时间</span>
		</li>
		<li class="col-end blog-item">
			<span>操作</span>
		</li>
	</ul>
    <script type="text/javascript" src="<%=basePath%>/lib/jquery/jquery.js"></script>
    <script>
    	$(function(){
    		$.ajax({
	    		url:basePath+'/sys/blog/query',
	    		type:'post',
	    		contentType:'application/json;charset=UTF-8',
	    		success:function(res){
	    			var innerHTML = '';
	    			for(var i = 0; i < res.length; i++){
	    				var data = res[i];
	    				innerHTML = innerHTML + '<li class="col1 blog-item">'+
							    					'<span>'+data.title+'</span>'+
							    				'</li>'+
							    				'<li class="col2 blog-item">'+
							    					'<span>'+data.createdate+'</span>'+
							    				'</li>'+
							    				'<li class="col-end blog-item">'+
							    					'<span><a onclick="editB('+data.id+');">编辑</a><a onclick="deleteB('+data.id+');">删除</a></span>'+
							    				'</li>';
	    			}
	    			$('#blogList').append($(innerHTML));
	    		},
	    		error:function(){
	    		}
	    	});
    	});
    	
    	function editB(id){
			window.location.href = basePath + '/sys/blog/'+id+'/edit';
		}
		function deleteB(id){
			$.ajax({
	    		url:basePath+'/sys/blog/delete',
	    		type:'post',
	    		contentType:'application/json;charset=UTF-8',
	    		data:JSON.stringify({
	    			id:id
	    		}),
	    		success:function(res){
	    			window.location.href = window.location.href;
	    		},
	    		error:function(){
	    		}
	    	});
		}
		function add(){
			window.location.href = basePath+'/sys/blog/page/add';
		}
    </script>
</body>
</html>