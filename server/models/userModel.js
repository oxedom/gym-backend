const mongoose = require("mongoose");
const {
  isEmail
} = require('validator');

const userSchema = mongoose.Schema({

  // _id: mongoose.Schema.Types.ObjectId,
  //User Data
  username: {
    type: String,
    required: [true, 'Please enter a Username'],
    unique: true,
  },
  fname: String,
  lname: String,

  email: {
    type: String,
    validate: [isEmail, 'Please enter a valid email'],
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
  },
  //ISO/IEC 5218 Standard for gender
  gender: {
    type: Number,
    min: 0,
    max: 4,
    required: [true, 'Please enter a gender'],
    lowercase: true,
  },
  birthday: Number,
  //Password
  hash: String,
  salt: String,
  //App Data
  sessions: [{
    sessionID: String,
    sessionToken: String,
    date: String
  }],
  sessionWallet: [{
    sessionToken: String,
    date: String
  }],
  accountCreation: Number,
});

module.exports = mongoose.model("user", userSchema);