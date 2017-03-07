var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var mongoose = require('mongoose');

app.use(router);
router.use(bodyParser.text());
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {"name": String, "password": String});

router.get("/getUser", function (req, res) {
  User.find(function(err, docs){
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  })
})

router.post("/createUser", function (req, res) {
  let data = JSON.parse(req.body);
  let newUser = new User(data);
  newUser.save(function(err, doc){
    if (err) {
      console.log(err);
    } else {
      res.end("OK");
    }
  })
})

router.put("/editUser", function (req, res) {
  let data = JSON.parse(req.body);

  User.update({name: data.name}, data, function(err, doc){
    if (err) {
      console.log(err);
    } else {
      res.end("OK");
    }
  })
})

app.listen(6969, function () {
    console.log("Run server at localhost:6969")
})
