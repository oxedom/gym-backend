const mongoose = require("mongoose");


const sessionSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
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