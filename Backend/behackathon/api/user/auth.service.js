var jwt = require('jsonwebtoken');
var config = require('../../config');
var user = require('./user.model.js');
var compose = require('composable-middleware');

module.exports = {

  authentication: function() {
    return compose()
      .use(function(req, res, next){
        // Verify token
        jwt.verify(req.headers.token, config.secret, function(err, decoded){
          if (err) {
            res.json({status: false, message: err.message});
          } else {
            // Get user by token
            req.user = decoded.data;
            next();
          }
        });
      });
  },

  hasRole: function(roleRequired) {
    return compose()
      .use(this.authentication())
      .use(function(req, res, next){
          if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
            next();
          } else {
            res.json({status: false, message: "This user don't have permissions."});
          }
      });
  }

}
