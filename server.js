var express = require('express');
var app = express()

const route = require('./Route/route')
var cors= require('cors')
const bodyParser = require('body-parser');
app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
  



// Configuring the database
const dbConfig = require('./Config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

 app.use('/',route)
app.listen(8080);