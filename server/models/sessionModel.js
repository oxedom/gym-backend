const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sessionSchema = mongoose.Schema({

    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    trainerid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    planid: {
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    },
    status: {
        type: String
    },
    date: {
        type: Number
    }
});

module.exports = mongoose.model("session", sessionSchema);