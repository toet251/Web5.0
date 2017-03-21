var Course = require('./course.model.js');
var User = require('../user/user.model.js');
var Instructor = require('../instructor/instructor.model.js');

module.exports = {
  getAll : function(req, res) {
    //var result = [];
    Course.find().sort('name')
      .select('-id')
      .populate('created_by')
      .populate('instructed_by')
      .exec(function (err, data) {
        res.json(data);
      })
  },

  create : function(req, res) {
    Course.create(
      req.body,
      function(err, data) {
        if (err) res.json({status: false, message: err});
        User.update({_id: req.body.created_by}, {$push: {created: data._id}}, function(err, data){
          if (err) res.json({status: false, message: err});
        });
        Instructor.update({_id: req.body.instructed_by}, {$push: {instructed: data._id}}, function(err, data){
          if (err) res.json({status: false, message: err});
        });
        res.json({status: true, message: "Create successfully!"});
      }
    )
  }

}
