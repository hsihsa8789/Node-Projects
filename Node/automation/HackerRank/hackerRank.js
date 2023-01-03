const puppeteer = require("puppeteer");

let email = "";
let password = "";
let cTab;

let browserOPenPromise= puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],

});

browserOPenPromise.then(function (browser){
    console.log("browser is open");
    // console.log(browser);
    let allTabsPromise = browser.pages();
    return allTabsPromise;

})
.then(function (allTabsArr) {
    cTab = allTabsArr[0];
    console.log("new tab");
    // url to navigation page to 

    let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");

    return visitingLoginPagePromise;

})
.then(function (){
    console.log("HackerRank login page opened");
    let emailWillBeTypedPromise = cTab.type("input[name='username']",email);
    return emailWillBeTypedPromise;
})
.then(function(){
    console.log("email is typed");
    let passwordWillBeTypedPromise = cTab.type("input[type='password']",password);
    return passwordWillBeTypedPromise;
})
.then(function (){
    console.log("password is typed");
    let WillBeLoggedInPromise = cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return WillBeLoggedInPromise;
})
.then(function(){
    console.log("my login is typed sussedfully");
})
.catch(function (err){
    console.log(err);
});