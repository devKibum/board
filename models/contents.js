// models/contents.js

var mongoose = require('mongoose');
var contentSchema = mongoose.Schema({
  id:{type:Number},
  title:{type:String},
  body:{type:String},
  writer:{type:String},
  views:{type:Number}
});

var contents = mongoose.model('contents', contentSchema);

module.exports = contents;
