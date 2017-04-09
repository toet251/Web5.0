var express = require('express');
var config =require('./config');
var mongoose = require('mongoose');

// Config server
var app = express();
config.settingExpress(app);
var routes = require('./routes.js')(app);

// Connect DB
mongoose.connect(config.mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connect db success');
});

//  Start server
app.listen(config.port, function(){
  console.log("Server is running at port " + config.port);
})
