var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.end('hello');
});

app.route('/test')
  .get(function(req, res){
    res.end('use Getttttt');
  })
  .post(function(req, res){
    res.end('use Postttttt');
  });
  
app.listen(9000, function(){
  console.log('App start at 9000');
});
