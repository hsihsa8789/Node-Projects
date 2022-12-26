// fs-> file system module-> it helpsus to make files/folders appends data in them , delete data, read data
const fs = require("fs"); // require("path_of_the_file");
// const f1 = require("./f1.txt");
const abc = require("../js/temp.js");
// require method ,goes to the file that is needed to be require method. executes that file. and if that is somthing
// that is exported we get that in variable 'abc'

console.log(abc);

// console.log(fs);
//appendfilesync appends data into a file, if file is not present, it creates the file and then appends the data
let res = fs.appendFileSync("f1.txt","hello I am f1 file");
fs.appendFileSync("f1.txt","\nI am not that much of samart");
// console.log(res);

// let data = fs.readFileSync("f1.txt");
// console.log(data+"");

let data = fs.readFileSync("f1.txt", "utf-8");
console.log(data);