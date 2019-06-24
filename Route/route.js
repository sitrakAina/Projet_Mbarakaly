var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/postComment')
var ControllerComms= require('../Controllers/getComment')

app.post('/postComment',Controller.PosteComment)
   .get('/getComment/:id', ControllerComms.getComment)

module.exports = app; 