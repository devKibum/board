// home.js

var express = require('express');
var router = express.Router();
var contents = require('../models/contents');

// home
router.get('/', function(req, res) {
  res.render('home/main');
});

router.get('/board/:board_id', function(req, res) {
  contents.find({board_id:req.params.board_id}, function(err, contents) {
    if(err) return res.json(err);
    res.render('home/board', {contents:contents});
  });
});

router.get('/write', function(req, res) {
  res.render('home/write');
});

module.exports = router;
