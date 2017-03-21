var User = require('../user/user.model.js');

module.exports = {
  auth : function(req, res) {
    User.findOne({username: req.body.username}, function(err,data){
      if (err) res.json({status: false, message: err});

      user = data;
      res.json({login: user.authenticate(req.body.password)});
    })
  }
}
