// home.js

var express = require('express');
var router = express.Router();


// home
router.get('/', function(req, res) {
  res.render('home/board');
});

module.exports = router;
