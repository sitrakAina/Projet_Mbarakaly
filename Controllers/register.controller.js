const Register = require('../Models/profil.js');

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);



exports.creerRegister = (req, res) => {

    if (!req.body.nom) {
        return res.status(400).send({
            message: "le contenu ne peut pas être vide"
        });
    }
    var id;
    Register.find()
        .then( test => {
    if (test.length == 0) {
        id = 0;
    } else {
        id = parseInt(test[test.length - 1].id) + 1
    }

    const register = new Register({
        _id: id,
        nom: req.body.nom,
        email: req.body.email,
        password: req.body.password,
        photo: req.body.photo,
    });

    register.save()
        .then(data => {
            res.send(data);
            console.log(data);
            
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création du profil."
            });
        });

        bcrypt.hash(register.password, salt, (err, hash) => {
            if (err) throw err;
            register.password = hash;
            register
              .save()
          });

    })
};


exports.findAll = (req, res) => {
    Register.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la récupération des notes."
            });
        });
};

// exports.findOne = (req, res) => {

//     Register.findById(req.params.id)
//         .then(eleve => {
//             Register.find()
//                 .then(prof => {
//                     // var tab = []
//                     // tab.push(eleve)
//                     // for (let i = 0; i < prof.length; i++) {
//                     //     if(prof[i].classeoccupe.classe1 == eleve.classe || prof[i].classeoccupe.classe2 == eleve.classe){
//                     //         tab.push(prof[i])
//                     //     } 
//                     // }
//                     res.send(prof)
//                 })
//             if (!eleve) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.id
//                 });
//             }
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving eleve with id " + req.params.id
//             });
//         });
// };


