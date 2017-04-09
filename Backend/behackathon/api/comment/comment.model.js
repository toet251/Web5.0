var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment = mongoose.Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

module.exports = mongoose.model('Comment', comment);
