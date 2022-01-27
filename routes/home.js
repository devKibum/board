// home.js

var express = require('express');
var router = express.Router();
var contents = require('../models/contents');
var fs = require('fs');

// home
router.get('/', function(req, res) {
  res.render('home/main');
});

router.get('/main', function(req, res) {
  res.render('home/main');
});

router.get('/board', function(req, res) {
    contents.find({}, function(err, contents) {
      if(err) return res.json(err);
      res.render('home/board', {contents:contents});
    });
});

router.get('/write', function(req, res) {
  res.render('home/write');
});

router.get('/profile', function(req, res) {
  fs.readFile('./views/home/profile.jpg', function(error, img) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(img);
  });
});

module.exports = router;
