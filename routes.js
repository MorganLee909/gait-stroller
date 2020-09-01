const phaseOne = require("./controllers/phaseOne.js");
const phaseTwo = require("./controllers/phaseTwo.js");

module.exports = function(app){
    app.get("/", (req, res)=>{
        return res.redirect("/p1m2549");
    });

    app.get("/p1m2549", phaseOne.m2549);
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
}