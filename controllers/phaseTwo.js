const Activity = require("../models/activity.js");
const PhaseTwo = require("../models/phaseTwo.js");

module.exports = {
    maleGroupOne: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g1m5064"
        }).save().catch(()=>{});

        let data = {
            page: "p2g1m5064",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    maleGroupTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g2m5064"
        }).save().catch(()=>{});

        let data = {
            page: "p2g2m5064",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    maleGroupThree: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g3m5064"
        }).save().catch(()=>{});

        let data = {
            page: "p2g3m5064",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    femaleGroupOne: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g1w2549"
        }).save().catch(()=>{});

        let data = {
            page: "p2g1w2549",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    femaleGroupTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g2w2549"
        }).save().catch(()=>{});

        let data = {
            page: "p2g2w2549",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    femaleGroupTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g2w2549"
        }).save().catch(()=>{});

        let data = {
            page: "p2g2w2549",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    femaleGroupThree: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p2g3w2549"
        }).save().catch(()=>{});

        let data = {
            page: "p2g3w2549",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseTwo.ejs", data);
    },

    formSubmit: function(req, res){
        let phaseTwo = new PhaseTwo({
            name: req.body.name,
            email: req.body.email,
            pageVisited: req.body.page,
            dateTime: new Date(),
            ippAddr: req.header("x-forwarded-for") || req.connection.remoteAddress
        });

        phaseTwo.gift = (req.body.gift === "on") ? true : false;

        phaseTwo.save()
            .then((phaseTwo)=>{
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