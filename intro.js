"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello World";
console.log(greeting);
var age = 20;
var gpa = 3.5;
// we however don't have to specify the type of the variable. TS will infer it from the value assigned to it
var isStudent = true; // TS will infer the type of isStudent to be boolean
// we can also specify the type of a variable to be any. This means that the variable can be assigned any type of value
var anyType = "Hello";
anyType = 20;
anyType = true;
function addTwo(num) {
    return num + 2; // TS will infer the return type of this function to be number. But the parameter num is explicitly declared to be of type number
}
function signUp(username, name, password) {
}
// we can also specify the return type of a function. This is done after the parameter list
function addThree(num) {
    return num + 3;
}
console.log("Add 3 to 5: ", addThree(5));
// usage with arrow functions
var add10 = function (num) { return num + 10; };
