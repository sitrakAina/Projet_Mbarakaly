var express = require('express');
const router = express.Router();




    const pub = require('../Controllers/controller.article');
    
    router.get('/article', pub.findAll);
    router.get('/article/:articleId', pub.findOne);
    router.get('/publication/:image_article', pub.lireImage);
    router.post('/article', pub.create);
    
    module.exports = router;