const {
    pool
} = require("../config/config");

const addUser = async (newUser) => {

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
    const [name, color] = process.argv.slice(2);

    const res = await pool.query(
        "INSERT INTO user (username, fname, lname, hash, salt) VALUES ($1, $2, $3, $4, $5)",
        [username, fname, lname, hash, salt]
    );
    console.log(`Added a User with the name ${name}`);

    console.log(name, color);
}


module.exports = {
    addUser
}