// *Declaring variables with types

let age0: Number = 22;  // Here age is a number. Now we cannot assign any other type to age.
let isMale: boolean = true; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student: string = "John"; // Here name is a string. Now we cannot assign any other type to name.

// *Declaring variables without types(Type Inference)
let age2 = 22;  // Here age is a number. Now we cannot assign any other type to age.
let isMale2 = false; // Here isMale is a boolean. Now we cannot assign any other type to isMale.
let student2 = "Doe"; // Here name is a string. Now we cannot assign any other type to name.

age2 = 23; // Error: Type 'string' is not assignable to type 'number'.

//* Declaring variables with multiple types

/*Note that the latest value assigned to the variable will be the type of the variable.
*/
let variable: string | boolean | number
variable = true
console.log(variable) // true
variable = "Hello"
console.log(variable) // Hello
variable = 22
console.log(variable) // 22