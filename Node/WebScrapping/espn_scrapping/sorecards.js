const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // console.log("from scorecards.js",url);
//    we have a url of a scorecard we want to get html of that sorecard
    request(url, cb);
}
function cb(err,res,body){
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

    let descArr = desc.text().split(",");

    //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];

    console.log(dateOfMatch);
    console.log(venueOfMatch);
    // 3. get result

    let matchResEle = selecTool(".match-header-info.match-info-MATCH.match-info-MATCH-half-width>.status.text");
    console.log(matchResEle.text());

    let matchResult = matchResEle.text();
    console.log(matchResult);

    // 4.get team name

    let teamNameArr = selecTool(".name-detail>.name-link");

    //  console.log(teamNames.text());

    let ownTeam = selecTool(teamNameArr[0]).text();
    let opponentTeam = selecTool(teamNameArr[i].text());

    // 5.get innings

    let allBatsmenTable = selecTool(".table.batsman tbody");
    
    console.log("number of bastsmen tables are -> "+ allBatsmenTable.length);
     
    let htmlString = " ";
    let count = 0;

    for(let i=0;i< allBatsmenTable.length;i++){
        htmlString = htmlString + selecTool(allBatsmenTable[i].html());
        let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows
        // let temp;
        if(i==1){
            let temp = ownTeam;
            ownTeam = opponentTeam;
            opponentTeam = temp;

        }

        console.log(ownTeam);
        console.log(opponetTeam);

        for(let i=0;i<allRows.length;i++){
            // check to see if any of the matched elements have the given classNme
            
        }
    }

}
module.exports = {
    gifs:getInfoFromScorecard
}

   