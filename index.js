// index.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var fs = require('fs');

// DB settings
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', () => {
  console.log('DB connected');
});
db.on('error', (err) => {
  console.log('DB ERROR : ', err);
});

express.static(__dirname+'/public')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', require('./routes/home'));

app.use(methodOverride('_method'));

const port = 3000;
app.listen(port, function() {
  console.log("server on! http://localhost:"+port);
});
