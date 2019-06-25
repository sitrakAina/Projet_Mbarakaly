const Article = require('../Models/article');
const fs = require('fs');

//Create new article
exports.create = (req, res) => {
    console.log('IO POST E');
    
    Article.find()
        .then(pub => {
            //autoincrement
            let idautom;
            if (pub.length == 0) {
                idautom = 0
            } else {
                idautom = parseInt(pub[pub.length - 1]._id) + 1
            }

            // //images
            if (req.files) {
                let imageFile = req.files.imgarticle;
                //console.log('inona ny ato o!'+imageFile)
                var nomImage = idautom+'.jpg'
                res.setHeader('Content-Type', 'text/plain');

                imageFile.mv(`${__dirname}/public/article${nomImage}`, function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }

                });
            }else{
                nomImage = ''
            }

            console.log(req.body.iduser);
            


            //console.log('image file '+req.body.filename)
            const article = new Article({
                _id: idautom,
                idutilisateur: req.body.iduser,
                article: req.body.article,
                image: 'article' + nomImage
            });



            // Save p in the database
            article.save()
                .then(() => {
                    Article.find()
                        .then(data => {
                            res.send(data);
                        })
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the article."

                    });
                });
        })
};

exports.findAll = (req, res) => {
    Article.find()
        .then(pubs => {
            res.send(pubs);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving articles."
            });
        });
};

exports.lireImage = (req, res) => {
    try {
        let picture = fs.readFileSync('./Controllers/public/' + req.params.image_article)
        console.log(picture);        
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("erreur be miitsy", e.stack);
    }
}

// Find a single article with a articleId
exports.findOne = (req, res) => {
    Article.findById(req.params.articleId)
        .then(articlechoix => {
            //console.log(unarticle) 
            if (!articlechoix) {
                return res.status(404).send({
                    message: "article not found with id" + req.params.articleId
                });
            }
            else {
                res.send(articlechoix);
            }


        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "article not found with id " + req.params.articleId
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving article with id " + req.params.articleId
            });
        });
};