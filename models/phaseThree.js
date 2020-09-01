const mongoose = require("mongoose");

const PhaseThreeSchema = new mongoose.Schema({
    name: String,
    email: String,
    gift: Boolean,
    pageVisited: String,
    dateTime: Date,
    ipAddr: String
});

module.exports = mongoose.model("PhaseThree", PhaseThreeSchema);