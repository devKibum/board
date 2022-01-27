// home.js

var express = require('express');
var router = express.Router();
var contents = require('../models/contents');
var fs = require('fs');

router.get('/profile', function(req, res) {
  fs.readFile('./views/home/profile.jpg', function(error, img) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(img);
  });
});
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

router.post('/new', function(req, res) {
  contents.countDocuments({}, function(err, count) {
    var _id = count+1;
    var _title = req.body.title;
    var _body = req.body.body;
    var _writer = "작성자";
    var _views = 0;
    contents.create({
      id:_id,
      title:_title,
      body:_body,
      writer:_writer,
      views:_views
    }, function(err, content) {
      if(err) return res.json(err);
      res.redirect('/board');
    });

  });

});

router.get('/:id', function(req, res) {
  contents.findOne({id:req.params.id}, function(err, content) {
    res.render('home/content', {content:content});
  });
});



module.exports = router;
