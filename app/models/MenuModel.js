/**
 * Created by kerwin on 16/3/5.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var MenuSchema = new Schema({
    name: String,//菜单名
    level: Number,//菜单等级
    link: String,//菜单链接
    order: Number,//菜单排名
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

MenuSchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.updateAt = Date.now();
    }
});

var Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;

