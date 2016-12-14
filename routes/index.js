var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'home'
  })
  next();
})

router.get('/', function(req, res, next) {
  console.log(2);
  res.status(200).end();
})



module.exports = router;