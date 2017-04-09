var category = require('./category.model.js');
var user = require('../user/user.model.js');
var config = require('../../config');
var jwt = require('jsonwebtoken');

module.exports = {
  getAll : function(req, res) {
    category.find()
      .exec(function (err, data) {
        if (err) res.json({status: false, message: err.message});
        res.json({status: true, message: "Success!", result: data});
      })
  },

  create : function(req, res) {
    newCategory = req.body;
    category.create(
      newCategory,
      function(err, data) {
        if (err) res.json({status: false, message: err.message});
        res.json({status: true, message: "Create successfully!", result: data});
      }
    );
  }

}
