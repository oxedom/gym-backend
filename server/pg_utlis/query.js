const {
    pool
} = require("../config/config");

const retrieveUser = async (username) => {
    try {
        const res = await pool.query(`select * from "user" WHERE username = '${username}';`);
        return res.rows
    } catch (error) {
        return error;
    }
}

retrieveUser('joshbrown').then(data => console.log(data))

module.exports = {
    retrieveUser
}