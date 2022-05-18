const mongoose = require("mongoose");

const muscleSchema = mongoose.Schema({

    name: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model("muscle", muscleSchema);