var express = require('express');
var bodyParser = require('body-parser');

module.exports = {
  port: 9000,
  settingExpress: function(app) {
    app.use(bodyParser.json());
  },
  mongoUri: 'mongodb://localhost/slot6'
}
