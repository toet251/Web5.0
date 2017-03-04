//tạo 1 web server với express

const express = require('express');
//body parse : parse dữ liệu gửi từ client
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
var router = express.Router();

app.use(router);

//đặt middleware vào route để parse dữ liệu
//Method Post
router.post('/createUser', bodyParser.json(),function(req, res) {
  var user4 = req.body;
  fs.readFile('./user.json', function(error, data){
      if (error) {
        response.end(error);
      } else {
        var tempData = JSON.parse(data);
        tempData['user4'] = user4;

        res.json(tempData);
      }
  })
})

//method Get
router.get('/getUser', function (request, response) {
  fs.readFile('./user.json', function(error, data){
      if (error) {
        response.end(error);
      } else {
        response.end(data);
      }
  })
})

var server = app.listen(8081, function() {
  console.log('Server run at localhost:8081');
})
