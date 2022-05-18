const mongoose = require("mongoose");

const muscleSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model("muscle", muscleSchema);