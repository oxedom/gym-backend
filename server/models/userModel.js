const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({

  //User Data
  username: { type: String, required: [true, 'Please enter a Username'], unique: true,},
  fname: String,
  lname: String, 

  email: { 
    type: String , 
    validate: [isEmail, 'Please enter a valid email'],
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
  },
  gender: { type: String},
  birthday: Number,
  //Password
  hash:  String,
  salt:  String,
  //App Data
  sessions: [ {sessionID: String,  date: String}],  
  accountCreation: Number,
});

module.exports = mongoose.model("user", userSchema);