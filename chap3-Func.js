console.log('=========== CH3 : FUNCTIONS ===============');

//! ---- FUNCTIONS ----


function funcName() {
    console.log('this is the funcName function.');

}
// calling fun
funcName();


//* More Prefered way to use func in js 👇👇
let func2 = function () {
    console.log('This is a variable function');
}
//calling fun
func2();

//? func Arguments

let toys = function (name, category = "neutral") {
    console.log(`This toy is ${name}, a -- toy.`);
    console.log(`This toy is ${name}, a ${category} toy.`);
}
toys('doll');
toys('car', 'boys');


//! ------- ARROW FUNCTIONS -------
console.log("Arrow func");


let toyz = (name, category) => `This toy is ${name}, a ${category} toy`;
// OR
let toyzz = (name, category) => { return `This toy is ${name}, a ${category} toy`; }


console.log(toyz('truck', 'boys\' '));
console.log(toyzz('kitchen', 'girls\' '));

//!--------------------------------------------------------

//! ---- HIGHER ORDER FUNCTION (passing function as an arg) -------

let upperC = function (str) {
    return str.toUpperCase();
}

// OR can be written as
// let upperC = (str) => str.toUpperCase();


let transformer = function (str, func) {
    return func(str);
}
// OR can be written as

// let transformer = (str,func) => func(str);

console.log(transformer('raj', upperC));
//* here transformer is a Higher Order function bcs it is taking the function as an arg.

//? Another Higher order func

let car = function (name) {
    return function (brand) {
        console.log(`the car name is ${name} and its brand is ${brand}`);
    }
}
// OR

// let car = (name) => (brand) => console.log(`this car name is ${name} and its brand is ${brand}`);


// car("Nexon")("TATA");
//* OR can be called as

let carFeat = car('Nexon');
carFeat('TATA');


//! ---- IIFE -------

(function (name) {
    console.log("this is a car", name);
})("Nexon")


//! ---- SET INTERVAL AND SET TIMEOUT -------

//? SET TIMEOUT

let greet = function (name) {
    console.log(`Good morning ${name}`);
}
setTimeout(greet, 1000, 'raj');         //1000ms = 1s

//*OR it can be written as

setTimeout(function (name) {
    console.log(`Good evening ${name}`);

}, 1000, "shyam")

//? same is SET INTERVAL as set timeout

// setInterval(greet,1000,"rohan");   //*it will run infinitly after 1sec






//! --- HOISTING ---

//* Hoisting is a JavaScript mechanism where variables and function
//* declarations are moved to the top of their scope before code execution.

//* Only normal function declarations are hoisted to the top and not the function expressions.



console.log('----xxx---- CH3 ends ---xxx---');


