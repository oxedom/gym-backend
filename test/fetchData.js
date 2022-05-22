const {
    pool
} = require("./postConfig");

async function retrieveData() {
    try {
        const res = await pool.query("SELECT * FROM clients");
        console.log(res)
        console.log(res.rows);
    } catch (error) {
        console.error(error);
    }
}

retrieveData()