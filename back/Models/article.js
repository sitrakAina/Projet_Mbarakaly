
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  _id:Number,
  idutilisateur: Number,
  article: String,
  image: String

}, {
  timestamps: true
});




  module.exports=mongoose.model('article',articleSchema)