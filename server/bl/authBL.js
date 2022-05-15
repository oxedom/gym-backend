const User = require("../models/userModel.js");
const utils = require("../lib/utlis")
const userClass = require('../class/userClass')
const errorBL = require('../bl/errorBL')

//Takes in loginObj username and password
const login = (loginObj) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      username: loginObj.username
    }, (err, user) => {
      if (err) {
        reject(err, console.log(err + "User not found"))
      } else {

        let password = toString(loginObj.password)
        let hash = user.hash
        let salt = user.salt
        const isValid = utils.validPassword(password, hash, salt);
        if (isValid) {

          const tokenObject = utils.issueJWT(user);
          resolve({
            success: true,
            user: user,
            token: tokenObject.token,
            expiresIn: tokenObject.expires,
          }, console.log(hash, salt));
        } else {

          resolve({
            success: false,
            msg: "you have entered the wrong password"
          });
        }
      }
    })

  })

}

const register = (registerObj) => {

  return new Promise((resolve, reject) => {

    //Pass length Validation
    if (registerObj.password.length < 8) {
      return resolve("Password not long enough")
    }

    const password = toString(registerObj.password)
    const saltHash = utils.genPassword(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    //Returns current time in UNIX
    const currentTime = new Date().getTime()

    const newUser = new User({
      //User Data
      username: registerObj.username,
      fname: registerObj.fname,
      lname: registerObj.lname,
      email: registerObj.email,
      gender: registerObj.gender,
      birthday: registerObj.birthday,

      //Password
      hash: hash,
      salt: salt,
      //App Data
      accountCreation: currentTime,
    });

    try {
      newUser.save((err) => {
        console.log('Save called back function fired');
        if (err) {
          console.log(`Error saving, passing err object to error BL and returning it.`)
          console.log(err);
        }

        if (err) {
          return errorBL.registerHandle(err)
        }
      }).then((user) => {
        const jwt = utils.issueJWT(user);
        console.log("New User Created: " + user.username, user.hash, user.salt)
        resolve({
          success: true,
          user: user,
          token: jwt.token,
          expiresIn: jwt.expires,
        });
      });
    } catch (err) {

      const errors = errorBL.registerHandle(err)
      return resolve({
        error: errors,
        status: 400
      })
    }
  })

}





module.exports = {
  login,
  register
};