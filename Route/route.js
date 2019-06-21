var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/postComment')

app.post('/postComment',Controller.PosteComment)


module.exports = app;