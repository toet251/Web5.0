var express = require('express');
var config =require('./config');
var mongoose = require('mongoose');

var app = express();
config.settingExpress(app);
var routes = require('./routes.js')(app);

mongoose.connect(config.mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connect db success');
});

app.listen(config.port, function(){
  console.log("App is running at port " + config.port);
})
