
// function yolo(){
//     var a = 10;
//     function cb(err,res){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("yes its not good to go");
//         }
//     }
// setTimeout(cb,5000);
// console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);


// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/";
// function yolo(){
//     var a=10;
//     function cb(err,res,body){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("hello how are you ?");
//             console.log("statusCode is",res.statusCode);
//         }
//     }

//     request(url,cb);
//     console.log(a);
// }
// yolo();
// let b = 100;
// console.log(b);

// for(var i=1;i<=10;i++){
//     setTimeout(function(){
//      console.log(i);
//     },200*i)

// }

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//      console.log(i);
//     },200*i)
// }


// for(var i=1;i<=10;i++){
//     function outer(a){
//         setTimeout(function(){
//         console.log(a);
//         },200*i)

//     }
//    outer(i);
// }


// let i=1;
// while(i<=10){
//     setTimeout(function(){
//         console.log(i);
//     })
//     i++;
    
// }