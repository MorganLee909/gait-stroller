const Activity = require("../models/activity.js");
const PhaseFour = require("../models/phaseFour.js");

module.exports = {
    seattleNoSocial: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p4w2549sns"
        }).save().catch(()=>{});

        let data = {
            page: "p4w2549sns",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseFour.ejs", data);
    },

    seattleWithSocial: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p4w2549sws"
        }).save().catch(()=>{});

        let data = {
            page: "p4w2549sws",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseFour.ejs", data);
    },

    portlandNoSocial: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p4w2549pns"
        }).save().catch(()=>{});

        let data = {
            page: "p4w2549pns",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseFour.ejs", data);
    },

    portlandWithSocial: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p4w2549pws"
        }).save().catch(()=>{});

        let data = {
            page: "p4w2549pws",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseFour.ejs", data);
    },

    formSubmit: function(req, res){
        let phaseFour = new PhaseFour({
            name: req.body.name,
            email: req.body.email,
            pageVisited: req.body.page,
            dateTime: new Date(),
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress
        });

        phaseFour.gift = (req.body.gift === "on") ? true : false;

        phaseFour.save()
            .then((phaseFour)=>{
                req.session.message = "Thanks for signing up!";
                req.session.success = true;
            })
            .catch((err)=>{
                req.session.message = "Unable to save your information, please try again";
                req.session.success = false;
            })
            .finally(()=>{
                return res.redirect(`/${req.body.page}`);
            });
    }
}