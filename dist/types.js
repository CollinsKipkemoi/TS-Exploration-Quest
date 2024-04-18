"use strict";
//! Declaring variables with types
let age0 = 22; // Here age is a number. Now we cannot assign any other type to age.
let isMale = true; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student = "John"; // Here name is a string. Now we cannot assign any other type to name.
//! Declaring variables without types(Type Inference)
let age2 = 22; // Here age is a number. Now we cannot assign any other type to age.
let isMale2 = false; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student2 = "Doe"; // Here name is a string. Now we cannot assign any other type to name.
age2 = Number('22'); // This is correct 
//! Declaring variables with multiple types
/*Note that the latest value assigned to the variable will be the type of the variable.
*/
let variable;
variable = true;
console.log(variable); // true
variable = "Hello";
console.log(variable); // Hello
variable = 22;
console.log(variable); // 22
// !Arrays and types
let myArr = ['apples', 'pears', 'cherries']; // An array of strings
let ages = [12, 34, 5, 23];
/*
We cannot add values of different types to the array. For example, we cannot add a string values to the ages array
*/
console.log(myArr.length);
let age = ages[0]; // The type of this variable is inferred from the value assigned to it
let things = [1, true, 'hello']; // An array of mixed types
let thing = things[0];
thing = false;
console.log(thing);
// *notice we are able to change the type of the variable thing from number to boolean. This is because the value is assigned from the array which is of mixed types
// !Objects and types
let user = {
    age: 21,
    firstName: 'Doe',
    isMale: true
};
let person3 = {
    name: "Mark",
    isMale: true,
    age: 10
};
person3.isMale = false;
console.log(user.firstName + ' is ' + user.age + ' years old');
// If we try to assign a value of a different type to a property, we will get an error
// user.age = '22' // Error: Type 'string' is not assignable to type 'number'.
user.age = 22; // This is correct
// !Type inference with objects
let student1 = {
    name: 'Moh',
    grade: 4.5
};
// The type of student1 is inferred from the value assigned to it
// student1 = {name: 'John', grade: 'A'} // Error: Type 'string' is not assignable to type 'number'.
let studentGrade = student1.grade; // Number
//! Functions and types
function add(a, b) {
    return a + b;
}
// The return type of the function is a number
let result = add(2, 3); // 5 which is a number
const subtract = (a, b) => {
    return a - b;
};
let result2 = subtract(5, 3); // 2 which is a number
function addAll(nums) {
    let sum = nums.reduce((initial, v) => initial + v, 0);
    return sum;
}
console.log(addAll([1, 2, 3, 4, 5])); // 15
//! Any type
// This type allows us to assign any type to a variable
let value;
value = 1;
value = 'Hello'; // This is correct
value = true; // This is correct
console.log(typeof value); // boolean
let value2;
//* If we do not specify the type of variable, it is inferred to be of type any
value2 = 1;
console.log("Type of value2: " + typeof value2); // number
value2 = 'Hello';
console.log("Type of value2: " + typeof value2); // string
value2 = {
    name: 'John',
    age: 22
};
console.log("Type of value2: " + typeof value2); // object
//! Array of any type
let arr = [1, 'Hello', true];
arr.push({ name: 'John', age: 22 });
console.log(arr); // [1, 'Hello', true, {name: 'John', age: 22}]
//!Function with any type
function addAny(a, b) {
    return a + b;
}
console.log(addAny(2, 3)); // 5
console.log(addAny('Hello', 'World')); // HelloWorld
let arr1 = ['Hello', 'World'];
let arr2 = [...arr1, "Test"];
console.log(arr2 == arr1); // false
console.log(arr2 === arr1); // false
function compareArrays(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
compareArrays(arr1, arr2) ? console.log('Arrays are equal') : console.log('Arrays are not equal');
let newArr = ['Hello', 1, 'World', 2];
// !Tuples
// *Tuples allow us to define an array with a fixed number of elements and types
let person = [
    'John',
    22,
    true
];
console.log("Array with 2 types: " + newArr);
// !named tuples
let std = ['John', 4.5];
console.log(std[0]); // John
let myStr = "Hello";
console.log(typeof myArr);
let anyVar;
anyVar = true;
anyVar = 22;
anyVar = "test";
console.log(anyVar);
// !default parameters 
function greet(name = "Mark") {
    return "Hello " + name;
}
console.log(greet("Nerd"));
// !void return
function printMessage() {
    console.log("No value is returned");
}
printMessage();
// !2-D arrays
let matrix = [];
matrix.push([1, 3, 5], [44, 5], [2, 1, 4]);
console.log(matrix);
// !function returning an object
function returnObj() {
    return {
        age: 100,
        isMale: false,
        name: "Jane"
    };
}
console.log(returnObj());
function checkAnimal() {
    return {
        name: "Kangaroo",
        color: "brown",
        height: 200
    };
}
console.log(checkAnimal());
const lion = {
    name: "Lion",
    color: "Yellow",
    height: 100
};
const isLion = (animal) => {
    console.log(animal.name === "Lion" ? "It is a Lion" : "It is not a Lion");
};
isLion(lion);
const user1 = {
    name: "John",
    age: 22,
    email: "user1@mail.com"
};
console.log(user1.password); // undefined
user1.password = "password";
console.log(user1);
const person1 = {
    name: "John",
    age: 22,
    email: "example@mail.com"
};
let user2 = {
    name: "John",
    age: 22,
    height: 200,
    password: "password"
};
console.log(user2);
// !Union types
// *Union types allow us to define a variable that can have multiple types
let value3 = "Hello";
value3 = 22;
console.log(value3);
// !Literal types
// *Literal types allow us to specify the exact value a variable can have
let grade;
grade = "A";
// grade = "E" // Error: Type '"E"' is not assignable to type '"A" | "B" | "C" | "D"'.
let isTrue;
isTrue = true; // This is correct
// isTrue = false // Error: Type 'false' is not assignable to type 'true'.
// !Tuple types
// *Tuple types allow us to define an array with a fixed number of elements and types. The order of the types must match the order of the elements in the array
let person2 = ["John", 22, true];
console.log(person2);
// !Enums
// *Enums allow us to define a set of named constants. By default, enums start at 0 and increment by 1 for each subsequent member unless you specify a different value
var weatherConditions;
(function (weatherConditions) {
    weatherConditions["Sunny"] = "sunny";
    weatherConditions["Rainy"] = "rainy";
    weatherConditions["Cloudy"] = "cloudy";
    weatherConditions["Snowy"] = "snowy";
})(weatherConditions || (weatherConditions = {}));
let todayWeather = weatherConditions.Sunny;
console.log(todayWeather); // 0
let addNums = (a, b) => {
    return a + b;
};
console.log(addNums(2, 3));
let student3 = {
    name: "John",
    age: 22,
    email: "mail.hu",
    grade: 4.5
};
console.log(student3);
function exampleFun(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
exampleFun("hello");
exampleFun(22.3333);
class Dog {
    bark() {
        console.log("Dog barks");
    }
}
class Cat {
    meow() {
        console.log("Cat meows");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
animalSound(new Dog());
animalSound(new Cat());
let manager1 = {
    name: "John",
    age: 22,
    position: "Manager",
    department: "HR"
};
console.log(manager1);
