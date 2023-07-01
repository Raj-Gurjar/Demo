//! --MAIN TOPIC--
//? Sub topic
//TODO Imp sub sub topic
//* Imp comment
// normal comment

console.log('=========== CH1 : DATA TYPES ===============');

//! -------------------------------------------------
//! --DATA TYPES--



//? var/let/const

console.log('Hello World');

// var a = 44
// a = 422

// console.log(a) 

let a = 3
// let a =2
console.log(a)

// ?------------------------------------

//? -- Strings ---

let s1 = null
let s2

console.log(typeof s1);
console.log(typeof s2);


console.log(s1, s2);

s1 = "We Are"
s2 = 'Human'

console.log(typeof s1);



console.log(s1, s2);
console.log(s1 + '   ' + s2);
console.log('you and me,', s1, s2);


//TODO; using template literals

let full = `you and me, ${s1} ${s2}`

console.log(full)

//TODO; string.method()

console.log(s1.toLowerCase());

//* for more methods: https://www.w3schools.com/js/js_string_methods.asp

// ?------------------------------------

//?  --- Array --- 

let arr = ['abc' , 333 , true];      //* can be any data type

console.log(arr[0], arr[1] ,arr[2],arr[5]);

console.log(typeof arr,  typeof arr[0] , typeof arr[1], typeof arr[2]);

//* Array can be modified

arr[0] = 'afff'

console.log(arr[0]);

//TODO; Array Methods

// More array methods ;https://www.w3schools.com/js/js_array_methods.asp
console.log(arr.length);
arr.pop();
console.log(arr);

//! ------------------------------------------------

//! --LOOSE VS STRICT EQUALITY--


//? Loose Equality
let age = 22;

console.log(age == '22');  //this is loosely equal bcs it equalize int to string
// '==' compares only values not data type.
//*should avoid '==' generally


//? Strict Equality

console.log(age === '22');
console.log(age !== '22');
// console.log(age <== '22'); wrong


//! ------------------------------------------------

//! -- TYPE CONVERSION --

let r1 = "33"

console.log(typeof r1, r1);

let n1 = Number(r1)

console.log(typeof n1, n1);

let r2 = String(n1)

console.log(typeof r2, r2);

let raj = 'raj'
let raj2 = Number(raj);   //* all strings can't be converter into number all no. can be converted into the string.
                          //* it will show NaN (Not a Number)

console.log(typeof raj, typeof raj2 , raj , raj2); 



console.log('----xxx---- CH1 : DATA TYPES  ends ---xxx---');
