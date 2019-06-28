var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/postComment')
var ControllerComms= require('../Controllers/getComment')
var Controllers= require('../Controllers/tchat.contolleur')

app.post('/postComment',Controller.PosteComment)
   .get('/getComment/:id', ControllerComms.getComment)

app.post('/message', Controllers.create);
    app.get('/message', Controllers.findAll);
    app.get('/profil/:profilId', Controllers.findOne);

module.exports = app; 