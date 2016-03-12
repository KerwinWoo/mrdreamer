/**
 * Created by kerwin on 16/3/10.
 */
var mongoose = require('mongoose');
require('../models/JobModel');
var Job = mongoose.model('Job','jobs');

module.exports = {
    findAllJobs: function(req, res){
        Job.find(function (err, data) {
            var jobs = data;
            res.json(jobs);
        });
    },
    findJobDetailById: function(req, res){
        Job.find({'name':'惠普'},function(err, data){
            var jobDetail = data;
            res.json(jobDetail);
        });
    }
};
