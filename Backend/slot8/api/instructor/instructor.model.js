var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Instructor = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  instructed: [ {type: Schema.Types.ObjectId, ref: 'Course'} ]
});

module.exports = mongoose.model('Instructor', Instructor);
