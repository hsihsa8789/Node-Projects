const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // console.log("from scorecards.js",url);
//    we have a url of a scorecard we want to get html of that sorecard
    request(url, cb);
}
function cd(err,res,body){
    if(err){
        console.log(err);
    }else{
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
    // selectool contains htmlof  ith sorecard

    let selecTool = cheerio.load(html);
    let desc = selecTool(".match-header-info.match-info-MATCH");
    // console.log(desc.text());

    let descArr = desc.text().split(".");
    console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];

    console.log(dateOfMatch);
    console.log(venueOfMatch);

    let matchResEle = selecTool(".match-header-info.match-info-MATCH.match-info-MATCH-half-width>.status.text");
    console.log(matchResEle.text());
}
module.exports = {
    gifs:getInfoFromScorecard
}

   