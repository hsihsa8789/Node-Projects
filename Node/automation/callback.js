// read 2 files f1 and f2
 const fs = require("fs");

                                    // q1 read 2 files f1.txt,f2,txt and f3.txt, serially by using call back

// fs.readFile("f1.txt",function ch1(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res + "");
//         fs.readFile("f2.txt",function ch2(err,res){
//             if(err){
//                console.log(err); 
//             }else{
//                 console.log(res+"");
//                 fs.readFile("f3.txt",function ch3(err,res){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log(res+"");
//                     }
//                 });
//             }
//         });
//    }
// });


// first way to overcome callback hell

// fs.readFile("f1.txt",cb1);
// function cb1(err,res){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(res+"");
//        fs.readFile("f2.txt",cb2);
//    }
// }

// function cb2(err,res){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(res+"");
//        console.log("f3.txt",cb3);
//    }
// }

// function cb2(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res+"");
//         console.log("all printed");
//     }
//  }

// q2 read 3 files f1.txt,f2.txt and f3.txt parallely using callbacks

// fs.readFile("f1.txt",cb);
// fs.readFile("f2.txt",cb);
// fs.readFile("f3.txt",cb);

// function cb(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res+"");
//     }
// }

// 2 way to overcome callback hell usind promise

// let f1readPromise = fs.promises.readFile("f1.txt");

// function read2file(data){
//     console.log(data+"");
//     let f2readPromises = fs.promises.readFile("f2.txt");
//     return f2readPromises;
// }

// function read3file(data){
//     console.log(data+"");
//     let f2readPromises = fs.promises.readFile("f3.txt");
//     return f2readPromises;
// }

// function readalldone(data){
//     console.log(data+"");
// }

// f1readPromise
//   .then(read2file)
//   .then(read3file)
//   .then(readalldone)
//     .catch(function(err){
//         console.log(err);
//     })

// q2. read files f1.txt, f2.txt, and f3.txt paralelly using promises

let f1p = fs.promises.readFile("f1.txt");
let f2p = fs.promises.readFile("f2.txt");
let f3p = fs.promises.readFile("f3.txt");

f1p.then(cb);
f2p.then(cb);
f3p.then(cb);

function cb(data){
    console.log(data+"");
}
