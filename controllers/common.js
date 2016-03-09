/**
 * Created by kerwin on 16/3/10.
 */
var mongoose = require('mongoose');
require('../db/models/MenuModel');
var Menu = mongoose.model('Menu','menu');

module.exports = {
    findAllMenus: function(req, res){
        Menu.find(function (err, data) {
            var menus = data;
            res.json(menus);
        });
    }
};
