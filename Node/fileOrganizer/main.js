
let helpFunc=require("./commands/help.js");
//  console.log(helpFunc.help());
// console.log(helpFunc);
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch(command){
    case "tree":
        // call tree function
        break;
    case "organize":
        // call organize function
        break;
    case "help":
        // call help function
        helpFunc.help();
        break;

    default:
        console.log("command not recognized :/");
        break;
}