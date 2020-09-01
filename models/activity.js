const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    ipAddr: String,
    dateTime: Date,
    pageVisited: String
});

module.exports = mongoose.model("Activity", ActivitySchema);