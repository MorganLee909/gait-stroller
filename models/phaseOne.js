const mongoose = require("mongoose");

const PhaseOneSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: String,
    pageVisited: String,
    dateTime: Date,
    ipAddr: String
});

module.exports = mongoose.model("PhaseOne", PhaseOneSchema);