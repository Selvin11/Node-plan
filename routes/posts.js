var express = require('express');
var router = express.Router(); // 定义路由模块

var checkLogin = require('../middlewares/check').checkLogin;

// 页面功能和逻辑
// 首页（显示部分文章，注册以及登录选项）=》注册页面、注册提交跳转页面 =》 用户文章发表页面、发表提交跳转页面 && 用户文章编辑页面、编辑提交跳转页面

// GET /posts?author=xxx 所有用户或者特定用户的文章页
router.get('/', function(req, res, next) {
  res.render('posts');
})

// POST /posts 发表一篇文章 提交
router.post('/', checkLogin, function(req, res, next) {
  res.send(req.flash());
})

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;