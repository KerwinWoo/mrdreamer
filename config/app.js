var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var indexRouter = require('./route');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'), dbUrl = 'mongodb://localhost/mrdreamer';


//视图文件以及视图类型配置,有点类似于SpringMVC
app.set('views', './public/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//这个一定要配置，否则post请求获取不到
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//配置favicon文件
var publicDirName = './public/';
app.use(favicon(publicDirName + 'img/favicon.ico'));

//配置静态资源,如果不配置的话，前台是无法访问这些文件的
app.use(express.static(publicDirName));
app.use(express.static('./bower_components'));

//配置路由
app.use('/',indexRouter);

//数据库连接
mongoose.connect(dbUrl);

module.exports = app;