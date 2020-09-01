const mongoose = require("mongoose");

const PhaseOneSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    zipCode: String,
    ipAddr: String
});

module.exports = mongoose.model("PhaseOne", PhaseOneSchema);