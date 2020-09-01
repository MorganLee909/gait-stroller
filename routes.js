const phaseOne = require("./controllers/phaseOne.js");

module.exports = function(app){
    app.get("/", ()=>{
        console.log("main");
    });

    app.get("/p1m2549", phaseOne.m2549);
    app.get("/p1m5064", phaseOne.m5064);
    app.get("/p1m65", phaseOne.m65);
    app.get("/p1w2549", phaseOne.w2549);
    app.get("/p1w5064", phaseOne.w5064);
    app.get("/p1w65", phaseOne.w65);
    app.post("/phaseone", phaseOne.formSubmit);
}