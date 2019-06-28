
    const model = require('../Controllers/register.controller');


var express = require('express')
var app = express.Router();

var Controller= require('../Controllers/postComment')

app.post('/postComment',Controller.PosteComment)

app.post('/register', model.creerRegister);
app.get('/register', model.findAll);
app.post('/login', model.login);


module.exports = app;
