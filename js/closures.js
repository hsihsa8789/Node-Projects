// closures:- function along with it's lexcial scope form a closures
// function outter(){
//     var a=10;    // lexcial scope
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outter();

// function outter(){
//     var a=10;    // lexcial scope
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var z = outter();
// // console.log(z);
// z();

function outter(){
    var a=10;    // lexcial scope
    function inner(){
        console.log(a);
    }
    // a = 20;
    return inner;
    a = 20;
} 
var z = outter();
// console.log(z);
z();
