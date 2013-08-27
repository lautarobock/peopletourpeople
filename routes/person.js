var model = require('../domain/model.js');

exports.findAll = function(req, res) {
    model.Person.find({}).exec(function(err,results) {
        console.log(results);
        res.send(results);
    });    
};

exports.findByFb = function(req, res) {
    model.Person.findOne({fb_id:req.params.id}).exec(function(err,results) {
        console.log(results);
        res.send(results);
    });    
};

exports.updateByFb = function(req, res) {
    model.Person.findOneAndUpdate({fb_id:req.body.fb_id},req.body,{},function(err,results) {
        console.log(err);
        res.send(results);
    });
    //console.log("UPDATE");
    //console.log(req.body);
    //model.Person.findOne({fb_id:req.params.id}).exec(function(err,results) {
    //    console.log(results);
    //    results.save(function(err) {
    //        console.log('saved');
    //        res.send(results);
    //    });
    //});    
    
};