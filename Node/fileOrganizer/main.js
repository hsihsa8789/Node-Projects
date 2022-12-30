
let helpFunc=require("./commands/help.js");
let orgFun=require("./commands/organize.js");
let orgtree=require("./commands/tree.js");
//  console.log(helpFunc.help());
// console.log(helpFunc);
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch(command){
    case "tree":
        // call tree functioncd
        orgtree.tree(path);
        break;
    case "organize":
        // call organize function
        orgFun.organize(path);
        break;
    case "help":
        // call help function
        helpFunc.help();
        break;

    default:
        console.log("command not recognized :/");
        break;
}