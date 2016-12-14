module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash('error', 'Not Login.');
      return res.redirect('/signin');
    }
    next();
  },
  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', 'Already Login');
      return res.redirect('back');
    }
    next();
  }
}