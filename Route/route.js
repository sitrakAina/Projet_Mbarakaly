var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/postComment')
var ControllerComms= require('../Controllers/getComment')
var Controller= require('../Controllers/tchat.contolleur')

app.post('/postComment',Controller.PosteComment)
   .get('/getComment/:id', ControllerComms.getComment)

app.post('/message', Controller.create);
    app.get('/message', Controller.findAll);
    app.get('/profil/:profilId', Controller.findOne);

module.exports = app; 