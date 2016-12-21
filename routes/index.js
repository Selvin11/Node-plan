module.exports = function(app) {
  // 定义以及挂载路由 express().use
  app.get('/', function(req, res) {
    res.redirect('/signup');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
};