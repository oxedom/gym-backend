const User = require("../models/userModel.js");
const utils = require("../lib/utlis")
const userClass = require('../class/userClass')
const errorBL = require('../bl/errorBL')

const insertUtils = require('../pg_utlis/insert')
const pgUtils = require("../pg_utlis/query")
//Takes in loginObj username and password
const login = async (loginObj) => {
  return new Promise((resolve, reject) => {
    try {
      const user = pgUtils.retrieveUser(loginObj.username)
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
        })
      } else {
        resolve({
          success: false,
          msg: "you have entered the wrong password"
        })
      }
    } catch (err) {

      resolve(err)

    }
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

    const newUser = {
      //User Data
      username: registerObj.username,
      fname: registerObj.fname,
      lname: registerObj.lname,

      //Password
      hash: hash,
      salt: salt,
      //App Data

    };

    insertUtils.addUser(newUser)

    // try {
    //   newUser.save((err) => {
    //     console.log('Save called back function fired');
    //     if (err) {
    //       console.log(`Error saving, passing err object to error BL and returning it.`)
    //       const errors = errorBL.registerHandle(err)
    //       return resolve({
    //         error: errors,
    //         status: 400
    //       })
    //     }

    //   }).then((user) => {
    //     const jwt = utils.issueJWT(user);
    //     console.log("New User Created: " + user.username, user.hash, user.salt)
    //     resolve({
    //       success: true,
    //       user: user,
    //       token: jwt.token,
    //       expiresIn: jwt.expires,
    //     });
    //   });
    // } catch (err) {
    //   if (err) {
    //     return resolve({
    //       error: errorBL.registerHandle(err),
    //       bitch: "Bitch",
    //       status: 400
    //     })

    // }

    // }
  })

}

module.exports = {
  login,
  register
};