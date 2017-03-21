module.exports = function(app) {
  app.use('/api/user', require('./api/user'));
  app.use('/api/course', require('./api/course'));
  app.use('/api/instructor', require('./api/instructor'));
  app.use('/api/auth', require('./api/auth'));
}
