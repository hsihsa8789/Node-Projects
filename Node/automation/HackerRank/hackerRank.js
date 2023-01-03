const puppeteer = require("puppeteer");

let browserOPen= puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]

});

browserOPen.then(function (){
    console.log("browser is open");
})