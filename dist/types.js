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
