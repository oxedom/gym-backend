const mongoose = require("mongoose");


const equitmentSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    weight_min: {
        type: Number
    },
    weight_max: {
        type: Number
    }
});

module.exports = mongoose.model("equitment", equitmentSchema);