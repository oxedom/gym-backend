const mongoose = require("mongoose");
const Schema = mongoose.Schema

const planSchema = mongoose.Schema({

    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    startdate: {
        type: String
    },
    enddate: {
        type: String
    },
    nutrition: {
        type: Boolean
    },
    exercises: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }],
    },
    records: {
        type: [{}],
    },
    active: {
        type: Boolean
    },
    date: {
        type: Number
    }
});

module.exports = mongoose.model("plan", planSchema);