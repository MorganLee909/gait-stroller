const mongoose = require("mongoose");

const PhaseTwoSchema = new mongoose.Schema({
    name: String,
    email: String,
    gift: Boolean,
    pageVisited: String,
    dateTime: Date,
    ipAddr: String
});

module.exports = mongoose.model("PhaseTwo", PhaseTwoSchema);