"use strict";
//! Declaring variables with types
let age0 = 22; // Here age is a number. Now we cannot assign any other type to age.
let isMale = true; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student = "John"; // Here name is a string. Now we cannot assign any other type to name.
//! Declaring variables without types(Type Inference)
let age2 = 22; // Here age is a number. Now we cannot assign any other type to age.
let isMale2 = false; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student2 = "Doe"; // Here name is a string. Now we cannot assign any other type to name.
age2 = 23; // Error: Type 'string' is not assignable to type 'number'.
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
//* If we do not specify the type of a variable, it is inferred to be of type any
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
