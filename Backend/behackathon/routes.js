module.exports = function(app) {
  app.use('/api/user', require('./api/user'));
  app.use('/api/post', require('./api/post'));
  app.use('/api/category', require('./api/category'));
}
