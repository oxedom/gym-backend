const {
    pool
} = require("../config/config");

const addUser = async (newUser) => {
    console.log('ADD USER FUNCTION HAS FIRED');
    const {
        username,
        fname,
        lname,
        email,
        gender,
        birthday,
        hash,
        salt
    } = newUser

    const res = await pool.query(
        `INSERT INTO "user" (username, fname, lname, hash, salt)
    VALUES ('${username}', '${fname}' , '${lname}' , '${hash}' , '${salt}')`
    );
    console.log(`Added a User with the name ${lname}`);


    return res
}


module.exports = {
    addUser
}