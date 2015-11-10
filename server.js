'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  var markNowHTML = convertMarkdown(req.body.string);
  res.send(markNowHTML);
});

function convertMarkdown(str){
  var markStr = marked(str);
  return markStr;
}

app.listen(PORT, function(){
});