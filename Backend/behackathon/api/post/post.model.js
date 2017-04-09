var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var post = mongoose.Schema({
  imageUrl: String,
  views: { type: Number, default: 0},
  likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  plus: { type: Number, default: 0},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  content: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

module.exports = mongoose.model('Post', post);
