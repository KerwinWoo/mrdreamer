/**
 * Created by kerwin on 16/3/10.
 */
var express = require('express');
var router = express.Router();
/*  ----------------  控制器-----------------*/
var ctrlsDirName = '../app/controllers/';
var commonControler = require(ctrlsDirName + 'CommonCtrl');
var homePageController = require(ctrlsDirName + 'HomePageCtrl');
/*  ----------------  控制器-----------------*/

router.get('/', function(req, res) {
    res.render('index');
});
router.get('/sys', function(req, res) {
    res.render('sysManage');
});
router.get('/404', function(req, res) {
    res.render('404');
});
router.get('/500', function(req, res) {
    res.render('500');
});
router.get('/home',function(req, res){
    res.render('home');
});
router.post('/findAllMenus',commonControler.findAllMenus);
router.post('/findAllJobs', homePageController.findAllJobs);
module.exports = router;
