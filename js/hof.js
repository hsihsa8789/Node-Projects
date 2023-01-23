// // function calculator in hof

// function calculator(operation, a, b){
//     if(operation=="+"){
//         return function add(){
//             return a+b;
//         };
//     }
// }

// console.log("hello");
// let fn = calculator("+",3,4);
// var ans = fn();
// console.log(ans);


// // function programming

 const arr = [2,5,8,6,78];

// // calculate the area of squares

// let areaofSquare = function(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         res.push(arr[i]*arr[i]);
//     }
//     return res;
// };
// console.log(areaofSquare(arr));

// // calculater the perimeter of square

// let perimeterofSquare = function(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         res.push(4*arr[i]);
//     }
//     return res;
// }

// console.log(perimeterofSquare(arr));


// // calculate the diagonal of square

// let diagonalofSquare = function(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         res.push(Math.sqrt(2)*arr[i]);
//     }
//     return res;
// }

// console.log(diagonalofSquare(arr));

// batter way

let area = function(a){
    return a*a;
}

let parimeter = function(a){
    return 4*a;
}

let calculate = function(arr,logic){
    let res = [];
    for(let i=0;i<arr.length;i++){
        res.push(logic(arr[i]));
    }
    return res;
}

// console.log(calculate(arr,area));
// console.log(calculate(arr,parimeter));

// map
// write a code to calculate thebarwa of square

let res = arr.map((a) =>  {
    return a*a;
})

// console.log(res);

// let res = arr.map(function(a){
//     return a*a;

// })
// console.log(res);

// filter

// write a code to return an array of even number
//  when filter has parameters callbackfun -->A function to execute for each element in the array. It should return a truthy to keep the element in the resulting array, and a falsy value otherwise.
// The function is called with the following arguments:

// let evenNum = arr.filter((num)=>{
//     return !(num%2); // is liye 5 ke case me reminder 1 aayega aur 1 trutly value hota hain to 
// })

// console.log(evenNum);

// reduce
// write a code to get sum of arr
// The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step 
// (this result is the running sum of all the previous steps) — until there are no more elements to add.

// let sumofArr = arr.reduce((acc, num) => {
//     console.log("acc: ",acc);
//     console.log("num: ",num);
//     acc = acc + num;
//     return acc;
// })

// console.log(sumofArr);

// write a code to calculate largest element in arr

const array = [-2,-5,-8,-6,-78];

function largestElement(max,cur){
    if(cur>max){
        max = cur;
    }
    return max;
}

let ans = array.reduce(largestElement,-Infinity);
console.log(ans);