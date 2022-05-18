const mongoose = require("mongoose");


const planSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
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
        type: [{}],
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