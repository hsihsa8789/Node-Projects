let fs = require("fs");
// synchronous working

console.log("before");

let data = fs.readFileSync("f1.txt");
console.log(data+"");

// async working

// fs.readFile("f1.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data+"");
//     }
// }

// promises working
let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");

// console.log(promiseThatFileWillBeRead); /// not print beacause without know the sates not print

// promiseThatFileWillBeRead.then(function printData(data){
//     console.log("heloo print");
//     console.log(data+"");
// });

promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.catch(printError);

console.log("after");

function printData(data){
    console.log("heloo print");
    console.log(data+"");
}

function printError(err){
    console.log(err);
}
