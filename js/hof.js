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

// let parimeter = function(a){
//     return 4*a;
// }

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

// let res = arr.map((a) =>  {
//     return a*a;
// })

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

// const array = [-2,-5,-8,-6,-78];

// function largestElement(max,cur){
//     if(cur>max){
//         max = cur;
//     }
//     return max;
// }

// let ans = array.reduce(largestElement,-Infinity);
// console.log(ans);

var users = [
    {firstName: "Mayank", lastName: "Singh", age: 55},
    {firstName: "Jyoti", lastName: "Jauhari", age: 25},
    {firstName: "Saket", lastName: "Bharti", age: 15},
    
];

// write a code to get fullname of all the users
// outer-> ["Mayank Singh","Jyoti Jauhari", "Saket Bharti"]

function getFullName(obj) {
    return obj.firstName + " " + obj.lastName;
}

var ans1  = users.map(getFullName)
console.log(ans1);

console.log(users.map((obj)=> obj.firstName +" "+obj.lastName));

// write a code to  return the number of peoplewith a particular  age
// output->{55:1,25:1,15:1}
// "bees in the knees"

function peopleAge(robj,cobj){
    let age = cobj.age;
    if(robj[age]){
        robj[age] = robj[age]+1;

    }
    else{
        robj[age] = 1;
    }
    return robj;
}

var obj = users.reduce(peopleAge, {});
console.log(obj);

// write a code to get firstName of all the users with age less than 30
// output-> ["Jyoti Jauhani","Saket Bharti"]

// hint : map and filter use hoge

var ans = users.filter((obj)=>obj.age<30);
console.log(ans);

var ans = ans.map(getFullName);

console.log(ans);

console.log(users.filter((obj)=>obj.age<30).map(getFullName));

// using reduce 

function getPeopleLessThan30(arr,obj){
    if(obj.age<30){
        arr.push(obj.firstName+""+obj.lastName);
    }
    return arr;
}

var ans=users.reduce(getPeopleLessThan30,[]);
console.log(ans);

console.log(calculate(arr,area));
// console.log(arr.calculate(area));
console.log(arr.map(area));


// implementation of own map

Array.prototype.myMap = function(logic){
    let res = [];
    for(let i=0;i<this.length;i++){
        res.push(logic(this[i]));
    }
    return res;
}

var narr = [1,2,3,4];
var ans = narr.myMap(area);

console.log(ans);

var ans = narr.myMap(function (num){
    return num*3;
})
console.log(ans);

Array.prototype.mySize = 8;
console.log(narr.mySize);

