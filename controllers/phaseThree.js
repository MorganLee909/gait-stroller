const Activity = require("../models/activity.js");
const PhaseThree = require("../models/phaseThree.js");

const mailgun = require("mailgun-js")({apiKey: process.env.MG_GAITSTROLLER_APIKEY, domain: "mail.gaitstroller.com"});

module.exports = {
    seattlePropOne: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549svp1"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549svp1",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    boulderPropOne: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549bvp1"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549bvp1",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    portlandPropOne: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549pvp1"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549pvp1",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    seattlePropTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549svp2"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549svp2",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    boulderPropTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549bvp2"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549bvp2",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    portlandPropTwo: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549pvp2"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549pvp2",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    seattlePropThree: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549svp3"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549svp3",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    boulderPropThree: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549bvp3"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549bvp3",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    portlandPropThree: function(req, res){
        new Activity({
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            pageVisited: "p3w2549pvp3"
        }).save().catch(()=>{});

        let data = {
            page: "p3w2549pvp3",
            message: req.session.message,
            success: req.session.success
        }

        req.session.message = undefined;
        req.session.success = undefined;

        return res.render("./phaseThree.ejs", data);
    },

    formSubmit: function(req, res){
        let phaseThree = new PhaseThree({
            name: req.body.name,
            email: req.body.email,
            zipCode: req.body.zipCode,
            pageVisited: req.body.page,
            dateTime: new Date(),
            ipAddr: req.header("x-forwarded-for") || req.connection.remoteAddress
        });

        phaseThree.gift = (req.body.gift === "on") ? true : false;

        phaseThree.save()
            .then((phaseThree)=>{
                const mailgunData = {
                    from: "gaitStroller <info@gaitstroller.com>",
                    to: phaseThree.email,
                    subject: "Thank you from gaitStroller!",
                    text: `Thank you for your interest ${phaseThree.name}!  We will keep you up to date with any further developments.\n\n Sincerely,\n    gaitStroller`
                }
                mailgun.messages().send(mailgunData, (error, body)=>{});

                const mailgunList = mailgun.lists("info@mail.gaitstroller.com");
                mailgunList.members().create({
                    subscribed: true,
                    address: phaseThree.email,
                    name: phaseThree.name
                }, (err, data)=>{});

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