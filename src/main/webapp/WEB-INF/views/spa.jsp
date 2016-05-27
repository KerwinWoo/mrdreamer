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
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>
<title>白日梦想家</title>
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel='dns-prefetch' href='http://wukeyan.com'>
<link rel="stylesheet" href="<%=basePath%>/css/spa.css">
<link rel="stylesheet" href="<%=basePath%>/css/keyframes.css">
<link rel="stylesheet" href="<%=basePath%>/css/font-awesome/font-awesome.min.css">
<script>
	var basePath = '<%=basePath%>';
</script>
</head>
<body scroll ng-app="app" class="clearfix" ng-controller="mainController" ng-click="isMobileMenuShow = false">
	<loading></loading>
	<header id="header" ng-class="{true:'header-show',false:'header-hid'}[isHeaderShow]">
		<nav class="clearfix nav-b">
			<ul class="navbar">
				<li class="navbar-item" ng-repeat="menu in menus">
					<a class="navbar-item-link" ng-class="{true:'active'}[menu.id == activeMenuId]" ng-click="changePage(menu.id,menu.link);" ng-bind="menu.name"></a>
				</li>
			</ul>
		</nav>
		<nav class="nav-s">
			<i class="fa fa-bars fa-2x nav-s-btn" aria-hidden="true" ng-click="isMobileMenuShow = !(isMobileMenuShow);$event.stopPropagation();"></i>
			<mobilenav ng-show="isMobileMenuShow"></mobilenav>
		</nav>
	</header>
	<div ui-view id="content">
	</div>
	<modalbox></modalbox>
	<footer id="footer">
	</footer>
	<script src="<%=basePath%>/lib/angular/angular.js"></script>
	<script src="<%=basePath%>/lib/angular/angular-ui-router.js"></script>
	<script src="<%=basePath%>/js/app.js"></script>
	<script src="<%=basePath%>/js/controllers/blogController.js"></script>
	<script src="<%=basePath%>/js/controllers/blogOverviewController.js"></script>
	<script src="<%=basePath%>/js/controllers/blogDetailController.js"></script>
	<script src="<%=basePath%>/js/controllers/appsController.js"></script>
	<script src="<%=basePath%>/js/controllers/appsCommunicatorController.js"></script>
	<script src="<%=basePath%>/js/controllers/appsCanvasController.js"></script>
	<script src="<%=basePath%>/js/controllers/meController.js"></script>
	<script src="<%=basePath%>/js/services/interceptors.js"></script>
	<script src="<%=basePath%>/js/services/commonUtilService.js"></script>
	<script src="http://192.168.1.107:3000/socket.io/socket.io.js" defer></script>
</body>
</html>