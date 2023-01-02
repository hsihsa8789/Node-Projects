let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const fs = require("fs");

const path = require("path");

const request = require("request");

const cheerio = require("cheerio");

const allMatchObj = require("./AllMatch");
 request(url,cb);

function cb(err, res, body){
    if(err){
        console.error("error",err);
    }else{
        handleHTML(body);
    }
}

let iplPath = path.join(__dirname,"IPL");
if(!fs.existsSync(iplPath)){
    fs.mkdirSync(iplPath);
}
function handleHTML(html){
    let selecTool = cheerio.load(html);
    


    let anchorElem = selecTool('a[data-hover="View All Results"]');

    console.log(anchorElem);

    let relativeLink = anchorElem.attr("href");
    console.log(relativeLink);

    let fullLink = "https://www.espncricinfo.com" + relativeLink;

    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
    
}

