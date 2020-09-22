const phaseOne = require("./controllers/phaseOne.js");
const phaseTwo = require("./controllers/phaseTwo.js");
const phaseThree = require("./controllers/phaseThree.js");
const phaseFour = require("./controllers/phaseFour.js");

module.exports = function(app){
    app.get("/", phaseOne.main);

    app.get("/p1m2549", phaseOne.m2549);
    app.get("/p1m2549b", phaseOne.m2549b);
    app.get("/p1m5064", phaseOne.m5064);
    app.get("/p1m65", phaseOne.m65);
    app.get("/p1w2549", phaseOne.w2549);
    app.get("/p1w5064", phaseOne.w5064);
    app.get("/p1w65", phaseOne.w65);
    app.post("/phaseone", phaseOne.formSubmit);

    app.get("/p2g1m5064", phaseTwo.maleGroupOne);
    app.get("/p2g2m5064", phaseTwo.maleGroupTwo);
    app.get("/p2g3m5064", phaseTwo.maleGroupThree);
    app.get("/p2g1w2549", phaseTwo.femaleGroupOne);
    app.get("/p2g2w2549", phaseTwo.femaleGroupTwo);
    app.get("/p2g3w2549", phaseTwo.femaleGroupThree);
    app.post("/phasetwo", phaseTwo.formSubmit);

    app.get("/p3w2549svp1", phaseThree.seattlePropOne);
    app.get("/p3w2549bvp1", phaseThree.boulderPropOne);
    app.get("/p3w2549pvp1", phaseThree.portlandPropOne);
    app.get("/p3w2549svp2", phaseThree.seattlePropTwo);
    app.get("/p3w2549bvp2", phaseThree.boulderPropTwo);
    app.get("/p3w2549pvp2", phaseThree.portlandPropTwo);
    app.get("/p3w2549svp3", phaseThree.seattlePropThree);
    app.get("/p3w2549bvp3", phaseThree.boulderPropThree);
    app.get("/p3w2549pvp3", phaseThree.portlandPropThree);
    app.post("/phasethree", phaseThree.formSubmit);

    app.get("/p4w2549sns", phaseFour.seattleNoSocial);
    app.get("/p4w2549sws", phaseFour.seattleWithSocial);
    app.get("/p4w2549pns", phaseFour.portlandNoSocial);
    app.get("/p4w2549pws", phaseFour.portlandWithSocial);
    app.post("/phasefour", phaseFour.formSubmit);
}