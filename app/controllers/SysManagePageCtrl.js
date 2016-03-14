/**
 * Created by kerwin on 16/3/13.
 */
var Job = require('../models/JobModel');

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
    },
    deleteJobById: function(req, res){
        var id = req.body.id;
        Job.remove({'_id':id},function(error){
            if(error){
                console.log(error);
            }
            else{
                console.log('job deleted!!!');
            }
        })
    },
    addJob: function(req, res){
        var job = req.body.job;
        var jobEntity = new Job({
            name: job.name,
            fromDate: job.fromDate,
            toDate: job.toDate,
            desc: job.desc,
            skills: job.skills
        });
        jobEntity.save(function(err){
            if(err){
                console.log(err);
            }
        });
        console.log('save over');
     /*   Job.create(job, function(err){
            if(err){
                console.log(err);
            }
            console.log('added');
        });*/
    }
};