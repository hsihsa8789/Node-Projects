const fs = require("fs");
const path = require("path");

function tree(srcPath){
    if(srcPath == undefined){
       console.log("please enter the valid path"); //undefined
       return;
    }else{
        let doesExist = fs.existsSync(srcPath);
        if(doesExist==true){
            treehelper(srcPath," ");
        }
    }
}

function treehelper(targetPath,index){
    let isfile = fs.lstatSync(targetPath).isFile();
    if(isfile==true){
        let fileName = path.basename(targetPath);
        console.log(index +"--"+ fileName);
        return;
    }
    let dirName = path.basename(targetPath);
    console.log(index +"--"+dirName);

    let childrenName = fs.readdirSync(targetPath);
    for(let i=0;i<childrenName.length;i++){
        let childPath= path.join(targetPath,childrenName[i]);
        treehelper(childPath,index+"\t");

    }

}
    
let sorpath = "C:/Users/SANJU/Desktop/GITDEMO/Node/fileOrganizer/download";
tree(sorpath);