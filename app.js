var express = require('express');
var app = express();
var path = require('path');
var indexRouter = require('./config/route');
var favicon = require('serve-favicon');
var mongoose = require('mongoose'), dbUrl = 'mongodb://localhost/mrdreamer';

//视图文件以及视图类型配置,有点类似于SpringMVC
app.set('views', './views');
app.set('view engine', 'jade');

//配置favicon文件
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

//配置静态资源,如果不配置的话，前台是无法访问这些文件的
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

//配置路由
app.use('/',indexRouter);

//数据库连接
mongoose.connect(dbUrl);

module.exports = app;