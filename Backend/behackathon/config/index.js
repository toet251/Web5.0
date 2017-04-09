var express = require('express');
var bodyParser = require('body-parser');

module.exports = {
  port: 9001,
  settingExpress: function(app) {
    app.use(bodyParser.json());
  },
  mongoUri: 'mongodb://localhost/behackathon',
  secret: 'toettoettoettoet',
  userRoles : ['user', 'admin']
}
