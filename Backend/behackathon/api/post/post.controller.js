var post = require('./post.model.js');
var user = require('../user/user.model.js');
var comment = require('../comment/comment.model.js');
var config = require('../../config');
var jwt = require('jsonwebtoken');

module.exports = {

  create : function(req, res) {
    newPost = req.body;
    newPost.author = req.user._id;
    post.create(
      newPost,
      function(err, data) {
        if (err) res.json({status: false, message: err.message});
        user.findByIdAndUpdate(newPost.author, {$push: {created: data._id}}, function(err, data){
          if (err) res.json({status: false, message: err});
        });
        res.json({status: true, message: "Create successfully!", result: data});
      }
    );
  },

  like : function(req, res) {
    curUser = req.user;
    post.findById(req.params._id, function(err, data){
      if (err) res.json({status: false, message: err.message});

      isLiked = false;
      data.likes.forEach(function(likedUser){
        if (likedUser == curUser._id) isLiked = true;
      });

      if (!isLiked) {
        post.findByIdAndUpdate(req.params._id,
          {$inc: {plus: 1}, $push: {likes: curUser._id}},
          function(err,data){
            if (err) res.json({status: false, message: err.message});
            res.json({status: true, message: "Like success", result: data});
          })
      } else {
        res.json({status: true, message: "Is liked"});
      }
    })
  },

  unlike : function(req, res) {
    curUser = req.user;
    post.findById(req.params._id, function(err, data){
      if (err) res.json({status: false, message: err.message});

      isLiked = false;
      data.likes.forEach(function(likedUser){
        if (likedUser == curUser._id) isLiked = true;
      });

      if (isLiked) {
        post.findByIdAndUpdate(req.params._id,
          {$inc: {plus: -1}, $pop: {likes: curUser._id}},
          function(err,data){
            if (err) res.json({status: false, message: err.message});
            res.json({status: true, message: "Unlike success", result: data});
          })
      } else {
        res.json({status: true, message: "Is unliked"});
      }
    })
  },

  comment : function(req, res) {
    req.body.author = req.user._id;

    comment.create(
      req.body,
      function(err, data) {
        if (err) res.json({status: false, message: err.message});
        post.findByIdAndUpdate(req.params._id, {$push: {comments: data._id}}, function(err, data){
          if (err) res.json({status: false, message: err});
          res.json({status: true, message: "Comment successfully!", result: data});
        });
    });
  },

  getAll : function(req, res) {
    post.find()
      .populate('author')
      .populate('category')
      .populate('comments')
      .exec(function (err, data) {
        if (err) res.json({status: false, message: err.message});
        res.json({status: true, message: "Successful!", result: data});
      })
  },

  get : function(req, res) {
      post.findOne({_id: req.params._id})
        .populate('author')
        .populate('category')
        .populate('comments')
        .exec(function (err, data) {
          if (err) res.json({status: false, message: err.message});

          post.findByIdAndUpdate(req.params._id, { $inc: { views: 1 }}, function(err, data){
            if (err) res.json({status: false, message: err.message});
            console.log(data.views);
            res.json({status: true, message: "Successful!", result: data});
          });
        });
  },

  update : function(req, res) {
    updateSet = {};
    if (req.body.imageUrl != null) updateSet.imageUrl = req.body.imageUrl;
    if (req.body.content != null) updateSet.content = req.body.content;
    if (req.body.category != null) updateSet.category = req.body.category;

    post.findByIdAndUpdate(req.params._id, {$set : updateSet})
      .then(function(){
        res.json({status : true , message : "Update successfully!"});
      })
      .catch(function(err){
        res.json({status : false , message : err.message});
      });
  },

  delete : function(req, res) {
    post.findOne({_id: req.params._id})
      .exec(function (err, data) {
        if (err) res.json({status: false, message: err.message});

        if (data == null) {
          res.json({status: false, message: "Wrong post id"});
          return;
        };

        user.findByIdAndUpdate(data.author, {$pull: {created: data._id}}, function(err, data){
          if (err) res.json({status: false, message: err.message});
          post.remove({_id : req.params._id} , function(err){
              if(err) res.json({status : false, message : err.message});
              res.json({status : true , message : "Delete successfully!"});
          });
        });
      });
  }
}
