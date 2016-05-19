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
<title>白日梦想家</title>
<style type="text/css">
    div{
        width:100%;
    }
</style>
<script>
	var basePath = '<%=basePath%>';
</script>
</head>
<body>
	标题:<input type="text" id="title" value=""/>
	图片链接:<input type="text" id="link" value=""/>
	<select id="type">
		<option value="技术">技术</option>
		<option value="生活">生活</option>
		<option value="娱乐">娱乐</option>
		<option value="学习">学习</option>
	</select>
    <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
    <button type="button" id="submit" onclick="submit();">提交</button>
    <script type="text/javascript" src="<%=basePath%>/js/WKY/WKY.js"></script>
    <script type="text/javascript" src="<%=basePath%>/lib/jquery/jquery.js"></script>
	<script type="text/javascript" charset="utf-8" src="<%=basePath%>/lib/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="<%=basePath%>/lib/ueditor/ueditor.all.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="<%=basePath%>/lib/ueditor/lang/zh-cn/zh-cn.js"></script>
	<script type="text/javascript">
    var ue = UE.getEditor('editor');
    function getContent(){
    	return UE.getEditor('editor').getContent();
    }
    function submit(){
    	var title = WKY.getElementById('title').value;
    	var content = getContent();
    	var type = WKY.getElementById('type').value;
    	var link = WKY.getElementById('link').value;
    	$.ajax({
    		url:basePath+'/sys/addBlog',
    		type:'post',
    		data:JSON.stringify({
    			title:title,
    			content:content,
    			type:type,
    			picurl:link
    		}),
    		contentType:'application/json;charset=UTF-8',
    		success:function(res){
    			alert(res);
    		},
    		error:function(){
    		}
    	});
    }
    </script>
</body>
</html>