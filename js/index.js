// var a;
// a=10;
// console.log(a);
// console.log(typeof a);
// var num = 200;
// console.log(`half of ${num} is ${num/2}`);
// var r = "hello";
// console.log(r);
// var r = 100;
// console.log(r);

// let l = 100;
// console.log(l);
// Identifier 'l' has already been declared
// let l = "200";
// console.log(l);
// l=300;
// console.log(l);
// var num =10;
// for(var i=0;i<num;i++){
//     let j =20;
//     if(i%2==0){
//         console.log("evan number");
//         console.log(j);
//     }
    
// }
// console.log(i);
// function add(a,b){
//     console.log(a+b);
// }

// function add(a,b){
//     return a+b;
// }

// function calculate(str,a,b){
//     if(str=="add"){
//         return function add(){
//             console.log(a+b);
//         }
//     }
// }

// let returnfun = calculate("add",3,2);
// console.log("return a function \n"+returnfun);
// returnfun();

// let syahi = function abc(){
//     console.log("hello guys is an function expression");
// }
// console.log(""+syahi);
// syahi();

// function abs(){
//     console.log("hello sir how are you");
// }
// console.log(""+abs);
// abs();


// function expression
// let sayhi = function abs(){
//     console.log("hello sir how are you");
// }
// console.log("line 54\n"+sayhi);
// sayhi();

// imidiately invoke function expression

function add(a,b){
    return a+b;
}
// add(2,3);

let additioniife = (function add(a,b){
    return a+b;
})(30,20);
// console.log(additioniife(30,20));
console.log(additioniife);