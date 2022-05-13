const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  //User Data
  username: { type: String , required: true},
  fname: String,
  lname: String, 
  email: { type: String , required: true},
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