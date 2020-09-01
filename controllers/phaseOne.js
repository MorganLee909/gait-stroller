const Activity = require("../models/activity.js");

module.exports = {
    m2549: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 m2549"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 m2549"});
    },

    m5064: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 m5064"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 m5064"});
    },

    m65: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 m65"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 m65"});
    },

    w2549: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 w2549"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 w2549"});
    },

    w5064: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 w5064"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 w5064"});
    },

    w65: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "Phase 1 w65"
        }).save().catch(()=>{});

        return res.render("./phaseOne.ejs", {page: "Phase 1 w65"});
    },

    formSubmit: function(req, res)
}