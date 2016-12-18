var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes'); // routes/index.js
var pkg = require('./package'); //packge.json


var app = express();



//设置模板引擎
app.set('views', path.join(__dirname, 'views')); //视图模板存放目录
app.set('view engine', 'pug');

//设置静态文件路径
app.use(express.static(path.join(__dirname, 'public')));

//处理表单及文件上传的中间件
app.use(require('express-formidable')({
  uploadDir: path.join(__dirname,'public/img'),//图像上传目录
  keepExtensions:true
}));

//session中间件 调用config/default.js配置
app.use(session({
  name: config.session.key,
  secret: config.session.secret,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new MongoStore({
    url: config.mongodb // 将session存储于mongodb中
  })
}))

// flash 中间价，用来显示通知
app.use(flash());

// 设置模板全局常量
// app.locals.blog = {
//   title: pkg.name,
//   description: pkg.description
// };

// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.success = req.flash('success').toString();
  res.locals.error = req.flash('error').toString();
  next();
});

// 路由挂载
routes(app);


app.listen(config.port, function() {
  console.log(`${pkg.name} listening on port ${config.port}`);
});