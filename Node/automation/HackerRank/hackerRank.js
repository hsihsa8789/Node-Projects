const puppeteer = require("puppeteer");
const {answer} = require("./codes.js");

let email = "ashish.dubey8789@gmail.com";
let password = "Ashish#2121";
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
    // waitAndClick will wait for the selector to load, and then click on the node
    let algorithTabWillBeOPennedPromise = waitAndClick('div[data-automation="algorithms"]');
    return algorithTabWillBeOPennedPromise;
})
.then(function (){
    console.log("algorithm page  is opened");
    let allQuesPromise = cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]');
    return allQuesPromise;
})
.then(function(){
    function getAllQuesLinks(){
        let allElemArr = document.querySelectorAll('[data-analytics="ChallengeListChallengeName"]');
    let linksArr = [];
    for(let i=0;i<allElemArr.length;i++){

        linksArr.push(allElemArr[i].getAttribute("href"));
    }
    return linksArr;

    }
    let linksArrPromise = cTab.evaluate(getAllQuesLinks);
    return linksArrPromise;

})
.then(function(linksArrPromise){
    console.log("link to all ques recived");
    // console.log(linksArrPromise);

    let questionWillBeSolvedPromise = questionSolver(linksArrPromise[0],0);
    // for(let i=1;i<linksArrPromise.length;i++){
    //     questionWillBeSolvedPromise = questionWillBeSolvedPromise.then(function(){
    //         return questionSolver(linksArrPromise[i],i);
    //     })
    // }
    return questionWillBeSolvedPromise;

})
.then(function() {
    console.log("question is solved");

})
.catch(function (err){
    console.log(err);
});

function questionSolver(url,idx){
    return new Promise(function(resolve,reject){
        let fullLink = `https://www.hackerrank.com${url}`;
        let gotoQuesPagePromise = cTab.goto(fullLink);
        gotoQuesPagePromise
        .then(function(){
            console.log("Question opend");
            // tick the custom input box markes
            let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
            return waitForCheckBoxAndClickPromise;
        })
        .then(function(){
            let waitForBoxPromise = cTab.waitForSelector(".custominput");
            return waitForBoxPromise;
        })
        .then(function(){
            let codeWillBeTypedPromise = cTab.type(".custominput",answer[idx]);
            return codeWillBeTypedPromise;

        })
        .then(function(){
            let controlKeyIsPressPromise = cTab.keyboard.down("Control");
            return controlKeyIsPressPromise;

        })
        .then(function(){
            let akeyPressedPromise = cTab.keyboard.press("a");
            return akeyPressedPromise;

        })
        .then(function(){
            let xkeyPressedPromise = cTab.keyboard.press("x");
            return xkeyPressedPromise;

        })
        .then(function(){
            let ctrIsReleasedPromised = cTab.keyboard.up("Control");
            return ctrIsReleasedPromised;

        })
        .then(function(){
            // select the editor promised
            let cursorOnEditorPromise = cTab.click(".monaco-editor.no-user-select.vs");
            return cursorOnEditorPromise;

        })
        .then(function(){
            let controlPressPromise = cTab.keyboard.down("Control");
            return controlPressPromise;
        })
        .then(function(){
            let aKeyPressedPromise = cTab.keyboard.press("a",{delay:100});
            return aKeyPressedPromise;
        })
        .then(function(){
            let vKeyPressedPromise = cTab.keyboard.press("v",{delay:100});
            return vKeyPressedPromise;
        })
        .then(function(){
            let controlDownPromise = cTab.keyboard.up("Control");
            return controlDownPromise;
        })
        .then(function(){
            let submitButtonClickPromise = cTab.click(".hr-monaco-submit");
            return submitButtonClickPromise;
        })
        .then(function(){
            console.log("code submitted successsfully");
            resolve();
        })
        .catch(function(err){
            reject(err);
        });
        

    });
}

function waitAndClick(algoBtn){
    let myPromise = new Promise(function(resolve,reject){
        let waitForSelectorPromise = cTab.waitForSelector(algoBtn);
        waitForSelectorPromise
        .then(function (){
            let clickPromise = cTab.click(algoBtn);
            return clickPromise;

        })
        .then(function (){
            resolve();
        })
        .catch(function (err){
            console.log(err);
        })
    });
    return myPromise;
}