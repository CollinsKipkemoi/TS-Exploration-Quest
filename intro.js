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
// a better way of writing arrow functions
var add20 = function (num) { return num + 20; };
// Test
console.log("Add 20 to 5: ", add20(5));
var colors = ["red", "green", "blue"];
colors.map(function (color, index) {
    console.log("color: ".concat(index + 1, " is ").concat(color));
});
// Return types in TS
// void: This means that the function does not return anything
function sayHello() {
    console.log("Hello");
}
sayHello();
// never: This means that the function does not return anything and it does not have an endpoint
function throwError() {
    throw Error("Error");
}
// Test
throwError();
