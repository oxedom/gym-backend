const {
    pool
} = require("../config/config");

const retrieveUser = async (username) => {

    if (username == "SQL INJECTION") {
        return "ERROR"
    }

    try {
        const res = await pool.query(`select * from "user" WHERE username = '${username}';`);
        return res.rows
    } catch (error) {
        return error;
    }
}

const retrieveUserByID = async (id) => {

    if (username == "SQL INJECTION") {
        return "ERROR"
    }

    try {
        const res = await pool.query(`select * from "user" WHERE id = '${id}';`);
        return res.rows
    } catch (error) {
        return error;
    }
}


module.exports = {
    retrieveUser,
    retrieveUserByID
}