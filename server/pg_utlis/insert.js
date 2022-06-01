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

    let text = 'INSERT INTO "user"(username, fname, lname, hash, salt) VALUES($1, $2, $3, $4, $5) RETURNING *'
    let values = [username, fname, lname, hash, salt]

    const res = pool.query(text, values, (err, res) => {
        if (err) {
            return err;
        } else {
            console.log(`Added a User with the username ${username}`);
            return res;
        }
    });



    return res
}


module.exports = {
    addUser
}