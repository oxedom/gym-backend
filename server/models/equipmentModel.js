const mongoose = require("mongoose");
const Schema = mongoose.Schema

const equipmentSchema = mongoose.Schema({

    name: {
        type: String
    },
    weight_min: {
        type: Number
    },
    weight_max: {
        type: Number
    },
    muscles: [{
        type: Schema.Types.ObjectId,
        ref: 'Muscle'
    }]
});

module.exports = mongoose.model("equipment", equipmentSchema);