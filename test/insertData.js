const {
    pool
} = require("./postConfig");

async function insertData() {
    const [name, color] = process.argv.slice(2);

    const res = await pool.query(
        "INSERT INTO clients (first_name, last_name) VALUES ($1, $2)",
        [name, color]
    );
    console.log(`Added a shark with the name ${name}`);

    console.log(name, color);
}

insertData();