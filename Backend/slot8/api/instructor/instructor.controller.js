var Instructor = require('./instructor.model.js');

module.exports = {
  getAll : function(req, res) {
    Instructor.find().sort('name')
      .select('-id')
      .populate('instructed')
      .exec(function (err, data) {
        res.json(data);
      });
  },

  create : function(req, res) {
    Instructor.create(
      req.body,
      function(err, data) {
        if (err) res.json({status: false, message: err});
        res.json({status: true, message:'Create successful'});
      }
    )
  }
}
