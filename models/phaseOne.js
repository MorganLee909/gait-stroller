const mongoose = require("mongoose");

const PhaseOneSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    zipCode: String,
    pageVisitied: String,
    dateTime: Date,
    ipAddr: String
});

module.exports = mongoose.model("PhaseOne", PhaseOneSchema);