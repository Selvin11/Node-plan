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


// 路由挂载
routes(app);


app.listen(config.port, function() {
  console.log(`${pkg.name} listening on port ${config.port}`);
});