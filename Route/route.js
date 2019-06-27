var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/tchat.contolleur')
app.post('/message', Controller.create);
    app.get('/message', Controller.findAll);
    app.get('/profil/:profilId', Controller.findOne);


module.exports = app;