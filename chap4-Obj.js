console.log('=========== CH4 : OBJECTS ===============');


//!--- OBJECTS ---

let car = {
    name: 'Nexon',
    brand: 'TATA',
    price: 1000000,
    features: ['ABS', 'Power Steering', 'Power Windows', 'Airbags', 'Rear Camera'],
}

console.log(car['name']);
console.log(car.name);         //* More helpful bcs it is not changable
console.log(car.features[2]);


//? Que: Difference between dot and bracket notation
//? Ans: Dot notation is used when we know the property 
//?      name and bracket notation is used when we don't know the property name

// eg

// let carProperty = "name";
let carProperty = "brand";

console.log(car[carProperty]);
console.log(car.carProperty);  //*can't use for dynamic properties


//TODO Modifing Object Property

//? can be done by both . and []

car.brand = "Honda"
console.log(car.brand);

car["brand"] = "Kia"
console.log(car["brand"]);

//TODO  Deleting Object property

// delete car.name;
delete car["name"]
console.log(car.name);



//!--- METHODS ---

//* Method is the function inside the Object

let car1 = {
    start: function (time) {
        console.log(`car started after ${time}`);
    }

}

car1.start("33s");


//! THIS KEYWORD.

//*Def;
// In JavaScript, the this keyword is a special keyword that refers to the 
// context in which a function is executed or an object from which a method is called. 
// The value of this is determined dynamically at runtime based on how a function is invoked or how a method is called.
// The behavior of this can vary depending on the context in which it is used.

let car2 =
{
    name: "XUV300",
    brand:"mahidra",
    cost:"50000",
    allDetails : function(){
        // return `this is the car ${car2.name} and its brand is ${car2.brand} and its cost is ${car2.cost}` 
        //? OR we can use "this"
        return `this is the car + ${this.name} and its brand is ${this.brand} and its cost is ${this.cost}`

        //* here 'this' denotes the object name i.e. 'car2'.
    }

}

console.log(car2.allDetails());

//! -----------------------------------


console.log('----xxx---- CH4 ends ---xxx---');
