var User = require('./user.model.js');

module.exports = {
  getAll : function(req, res){
    User.find().sort('name')
      .select('-id')
      .populate('created')
      .exec(function (err, data) {
        res.json(data);
      })
  },

  create : function(req, res){
    User.create(req.body , function(err , data){
      if(err) res.json({status : false , message : err});
      res.json({status : true , message : "Create successfully!"});
    })
  },

  updateOne : function(req , res){
    User.findOne({username : {
          $eq : req.body.username,
          $ne : req.params.username
        }})
        .then(function(data){
          if(data) res.json({status : false , message : "Username has already exist!"});
          else {
            User.update({username : req.params.username} , {$set : req.body})
                .then(function(){
                  res.json({status : true , message : "Update successfully!"});
                })
                .catch(function(err){
                  res.json({status : false , message : err});
                });
           }
        })
  },

  deleteOne : function(req , res){
    User.remove({username : req.params.username} , function(err){
        if(err) res.json({status : false, message : err});
        res.json({status : true , message : "Delete successfully!"});
    });
  },

  getOne : function(req , res){
    User.findOne({username : req.params.username} , {_id : 0 , __v :0})
        .then(function(data){
          res.send(data);
        })
        .catch(function(err){
          res.json({status : false , message : err});
        });
  }
}
