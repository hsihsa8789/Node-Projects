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
        let ext = allFiles[i].split(".")[1];
        // let ext = path.extname(allFiles[i]);
        console.log(ext);
    }
}
let srcPath = "C:/Users/SANJU/Desktop/GITDEMO/Node/fileOrganizer/download";
organize(srcPath);