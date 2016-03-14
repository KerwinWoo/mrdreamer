/**
 * Created by kerwin on 16/3/10.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var JobSchema = new Schema({
    name: String,//公司名称
    fromDate: Date,//入司时间
    toDate: Date,//离职时间
    desc: String,//工作描述
    skills: String,//学习技能
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

JobSchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.updateAt = Date.now();
    }
});

var Job = mongoose.model('Job', JobSchema, 'jobs');

module.exports = Job;