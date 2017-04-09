var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = mongoose.Schema({
  name: {type: String, required : true, unique : true}
});

module.exports = mongoose.model('Category', category);
