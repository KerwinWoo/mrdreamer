/**
 * Created by kerwin on 16/2/25.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','mrdreamer');
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
    console.log("打开数据库连接");
});
module.exports = db;