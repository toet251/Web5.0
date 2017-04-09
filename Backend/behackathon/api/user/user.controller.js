var user = require('./user.model.js');
var jwt = require('jsonwebtoken');
var config = require('../../config/index.js');

module.exports = {
  // Register new user
  register : function(req, res){
    user.create(req.body , function(err , data){
      if(err) {
        res.json({status : false , message : err.message});
      } else {
        res.json({status : true , message : "Create successfully!", result : data});
      }
    })
  },

  // Login
  login : function(req, res) {
    user.findOne({username: req.body.username}, function(err,data){
      if (err) res.json({status: false, message: err.message});

      // Username not existed
      if (data == null) {
        res.json({status: false, message: "Username not existed!"});
      } else
        // Check password
        if (data.authenticate(req.body.password)) {
          var token = jwt.sign({data: data}, config.secret, { expiresIn: '90m'});
          res.json({status: true, message: 'Login success', result: token});
        } else {
          res.json({status: false, message: 'Wrong password!'});
        }
    });
  },

  // Get all users
  getAll : function(req, res){
    user.find().sort('name')
      .populate('created')
      .exec(function (err, data) {
        if (err) res.json({status: false, message: err.message});
        res.json({status: true, message: "Success", result: data});
      })
  },

  // Get a user
  get : function(req , res){
    user.findOne({username : req.params.username})
        .then(function(data){
          res.json({status : true , message : "Success", result: data});
        })
        .catch(function(err){
          res.json({status : false , message : err.message});
        });
  },

  // Update a user
  update : function(req , res){
    user.findOne({username : {
          $eq : req.body.username,
          $ne : req.params.username
        }})
        .then(function(data){
          if(data) res.json({status : false , message : "Username was existed!"});
          else {
            console.log(123);
            user.update({username : req.params.username} , {$set : req.body})
                .then(function(){
                  res.json({status : true , message : "Update successfully!"});
                })
                .catch(function(err){
                  res.json({status : false , message : err.message});
                });
           }
        })
  },

  // Delete a user
  delete : function(req , res){
    user.remove({username : req.params.username} , function(err){
        if(err) res.json({status : false, message : err.message});
        res.json({status : true , message : "Delete successfully!"});
    });
  },
}
