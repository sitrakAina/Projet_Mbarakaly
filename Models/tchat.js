const mongoose = require('mongoose');


const tchatSchema = mongoose.Schema({
  _id:Number,
  message: String,
  idenvoyeur: String,
  idreceveur: String,
 

}, {
  timestamps: true
});


  module.exports=mongoose.model('tchat',tchatSchema)