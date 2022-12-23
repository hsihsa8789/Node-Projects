//  objects are always in key value pair

let obj = {};
console.log(obj);

let person = {
    name: "Ashish",
    age: 28,
    phone: 9324475644,
    gender: "male",
    height: "179cm",
};
console.log(person);

console.log(`hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "hello";
console.log(str.length);
console.log(str["length"]);

let captainAmerica = {
    firstname: "Ashish",
    lastname: "Dubey",
    friend: ["Alok","pawan","vishal","Akhii"],
    age: 28,
    phone: 9324475644,
    gender: "male",
    height: "179cm",
    address: {
        state: "Bihar",
        city: "gopalganj",
        country: "India",
    },
    sayHi: function(){
        console.log(`hello my name is ${this.firstname}`);
    }

};
console.log(captainAmerica);