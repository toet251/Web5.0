var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Course = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  title: String,
  img: String,
  description: String,
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
  instructed_by: {type: Schema.Types.ObjectId, ref: 'Instructor'}
});

module.exports = mongoose.model('Course', Course);
