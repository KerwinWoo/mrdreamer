/**
 * Created by kerwin on 16/3/10.
 */
var express = require('express');
var router = express.Router();

/*  ----------------  控制器-----------------*/
var commonController = require('../controllers/common');
/*  ----------------  控制器-----------------*/

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});
router.get('/home',function(req, res){
    res.render('home');
});
router.post('/menu', commonController.findAllMenus)
module.exports = router;
