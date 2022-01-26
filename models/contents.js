// models/contents.js

var mongoose = require('mongoose');
var contentSchema = mongoose.Schema({
  id:{type:Number},
  board_id:{type:String},
  title:{type:String},
  content:{type:String},
  author:{type:String},
  views:{type:Number}
});

var contents = mongoose.model('contents', contentSchema);

module.exports = contents;
