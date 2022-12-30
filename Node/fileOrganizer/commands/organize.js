const fs = require("fs");
const path = require("path");

let types = {
    media:["mp4","mkv","mp3"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    document:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg"
       ,"odf","txt","ps","tex"],
    app:["exe","dmg","pkg","deb"],
    image:["png","jpg","jpeg"]

}
function organize(srcPath){
    if(srcPath == undefined){
        // The process.cwd() method return the current working directory of the node.js process
        // console.log(srcPath); //undefined
        srcPath = process.cwd();
        // console.log("source path is ",srcPath);

    }
    let organizedFiles = path.join(srcPath,"organized_files");
    console.log("organizedfile folder path is "+organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        fs.mkdirSync(organizedFiles); // organizedFiles naam ka folder exist na kre to ak folder bna to warna rhane do
    
    }else{   
        console.log("folder allready exists");
    }
    // 3. scan the entire srcpath(download folder in this case)
    // read the content of the directory -> basically read te name of the files present in directory
       
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    // 4. traverse over all the files and classify then on the basis of their extension(pdf,mp3)

    for(let i=0;i<allFiles.length;i++){
        // let ext = allFiles[i].split(".")[1];
        // let ext = path.extname(allFiles[i]);
        // extname return the extension of the file
        let fullPathOfFile = path.join(srcPath,allFiles[i]);
        console.log(fullPathOfFile);
        // 1. check if it is a file or folder
        // lstatync give the information regarding the link provided basically it check is it file or folder
        let isFile = fs.lstatSync(fullPathOfFile).isFile();

        if(isFile){
            // 1.1 get ext name
            let ext = path.extname(allFiles[i]).split(".")[1];
            // console.log(ext);
            // 1.2 get forlder name  from extension

            let folderName = getFolderName(ext);
            // 1.3 copy from src folder (srcPath) and paste in destination folder (folder_name e.g doucument, media etc)

            copyFileToDest(srcPath,fullPathOfFile,folderName);
        }
    }
}
// let srcPath = "C:/Users/SANJU/Desktop/GITDEMO/Node/fileOrganizer/download";
// organize(srcPath);

function getFolderName(ext){
    for(let key in types){
        // console.log(key);
        for(let i=0;i<types[key].length;i++ ){
            if(types[key][i] == ext){
                return key;
            }
        }
    }
    return "miscellanius";

}

function copyFileToDest(srcPath,fullPathOfFile,folderName){
    // 1 folder ka path banana hai
    let destFolderPath = path.join(srcPath,"organized_files",folderName); // ...../downloads/organized_files/archives
    console.log(destFolderPath);
    // 2 check folder if exists ,if it does not, then make folder

    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }
    // 3.copy file from src folder to dest folder

    // returns the last portion of a path
    let fileName = path.basename(fullPathOfFile);
    let desFileNmae = path.join(destFolderPath,fileName);

    fs.copyFileSync(fullPathOfFile,desFileNmae);

}

module.exports = {
    organize:organize
}