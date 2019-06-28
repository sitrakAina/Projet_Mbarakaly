
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  _id: {type:Number,required:true}, 
  idutilisateur: {type:Number,required:true},
  article: {type:String,required:true},
  image: {type:String,required:false}

}, {
  timestamps: true
});




  module.exports=mongoose.model('article',articleSchema)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);