var path = require('path');

var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views')); //视图模板存放目录
app.set('view engine', 'pug');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get('/', function(req, res) {
//   res.send('hello, express1');
// });

// app.get('/users/:name', function(req, res) {
//   res.send('hello, ' + req.params.name);
// });


app.listen(3000);

console.log('server is running at http://localhost:3000');