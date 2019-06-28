const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const ProfilSchema = mongoose.Schema({
  _id:Number,
  nom: String,
  email: String,
  password: String,
  photo : String

}, {
  timestamps: true
});


ProfilSchema.methods.generateHash =  function(password){
  return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
}


  module.exports=mongoose.model('profil',ProfilSchema)