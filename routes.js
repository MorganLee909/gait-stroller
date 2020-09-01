const phaseOne = require("./controllers/phaseOne.js");

module.exports = function(app){
    app.get("/", ()=>{
        console.log("main");
    });

    app.get("/m2549", phaseOne.m2549);
    app.get("/m5064", phaseOne.m5064);
    app.get("/m65", phaseOne.m65);
    app.get("/w2549", phaseOne.w2549);
    app.get("/w5064", phaseOne.w5064);
    app.get("/w65", phaseOne.w65);
}