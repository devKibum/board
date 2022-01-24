// index.js

var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.use('/', require('./routes/home'));

const port = 3000;
app.listen(port, function() {
  console.log("server on! http://localhost:"+port);
});
