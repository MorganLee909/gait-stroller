const Activity = require("../models/activity.js");
const PhaseOne = require("../models/phaseOne.js");

const mailgun = require("mailgun-js")({apiKey: process.env.MG_GAITSTROLLER_APIKEY, domain: "mail.gaitstroller.com"});

module.exports = {
    m2549: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1m2549"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    m5064: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1m5064"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success || undefined
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    m65: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1m65"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success || undefined
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    w2549: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1w2549"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success || undefined
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    w5064: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1w5064"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success || undefined
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    w65: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p1w65"
        }).save().catch(()=>{});

        let data = {
            page: "p1m2549",
            message: req.session.message || undefined,
            success: req.session.success || undefined
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseOne.ejs", data);
    },

    formSubmit: function(req, res){
        new PhaseOne({
            name: req.body.name,
            email: req.body.email,
            zipCode: req.body.zipCode,
            pageVisited: req.body.page,
            dateTime: new Date(),
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress
        })
            .save()
            .then((phaseOne)=>{
                const mailgunData = {
                    from: "gaitStroller <info@gaitstroller.com>",
                    to: phaseOne.email,
                    subject: "Thank you from gaitStroller!",
                    text: `Thank you for your interest ${phaseOne.name}!  We will keep you up to date with any further developments.`
                }

                mailgun.messages().send(mailgunData, (error, body)=>{});

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