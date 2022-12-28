// node wcat.js filepath => displays the contents of a file in terminal
// node wcat.js filepath1 filepath2 filepath3 displays the contents of a all files in terminal in concatinated form in given order
// node wcat.js f1.txt
// node wcat.js f1.txt f2.txt f3.txt
const fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let filesArr = [];
let optionsArr = [];
// place files path in filesArr

for(let i=0;i<inputArr.length;i++){

    let firstChar = inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionsArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}

// console.log("file to be read are"+ filesArr);

// check if all the files are present
for(let i=0;i<filesArr.length;i++){
    let doesExit = fs.existsSync(filesArr[i]);
    if(!doesExit){
       console.log("file does not exit ");
    //    return;
       process.exit();
    }
}

// content read and appending start

let content = "";
for(let i=0;i<filesArr.length;i++){
    let filecontent = fs.readFileSync(filesArr[i]);
    content += filecontent + "\r\n";
}

// console.log(content);

let contentArr = content.split("\r\n");
// console.table(contentArr);

// cheack if -s is present or not

let tempArr = [];
let isSPresent = optionsArr.includes("-s");
if(isSPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i] = null;
        }else if(contentArr[i]=="" &&contentArr[i-1]==null){
            contentArr[i] = null;
        }
    }
    // console.log(contentArr);
    // push everything in tempArr except null
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    // console.log("after removel \n",tempArr);
}

contentArr = tempArr;

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");

// if -n or -b not found ,-1 is returned

let finalOption ="";
if(indexOfB != -1 && indexOfN != -1){
    if(indexOfN<indexOfB){
        finalOption = "-n";
    }else{
        finalOption = "-b";
    }
}
// either -n is present or -b is present
else{
    if(indexOfN !=-1){
       finalOption = "-n";
    }else if(indexOfB !=-1){
        finalOption = "-b";
    }

}
// calculating of function by evaluationoption

if(finalOption=="-n"){
    modifiyContentByN();
}else if(finalOption=="-b"){
    modifiyContentByB();
}

function modifiyContentByN(){
   for(let i=0;i<contentArr.length;i++){
   contentArr[i] = (i+1)+")" + contentArr[i];
   }
}

// console.log(contentArr);

function modifiyContentByB(){
    let count = 1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i] = count +")"+contentArr[i];
            count++;
        }
    }
}

console.log(contentArr);