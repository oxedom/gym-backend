const queryUtils = require("../server/pg_utlis/query")


queryUtils.retrieveUserByID(4).then(data => console.log(data)).catch(err => console.log(err))