let greeting: string = "Hello World";
console.log(greeting);

let age: number = 20;
let gpa: number = 3.5;
// we however don't have to specify the type of the variable. TS will infer it from the value assigned to it
let isStudent = true; // TS will infer the type of isStudent to be boolean

// we can also specify the type of a variable to be any. This means that the variable can be assigned any type of value
let anyType: any = "Hello";
anyType = 20;
anyType = true;

function addTwo(num: number){
    return num + 2; // TS will infer the return type of this function to be number. But the parameter num is explicitly declared to be of type number

}
function signUp(username: string, name: string, password: number){

}

// we can also specify the return type of a function. This is done after the parameter list
function addThree(num: number): number{
    return num + 3;
}
console.log("Add 3 to 5: ", addThree(5));

// usage with arrow functions
let add10 = (num: number) => num + 10;

// a better way of writing arrow functions
let add20 = (num: number):number => {return num + 20};
// Test
console.log("Add 20 to 5: ", add20(5));

let colors = ["red", "green", "blue"];
colors.map((color, index)=>{
console.log(`color: ${index + 1} is ${color}`)
});

// Return types in TS
// void: This means that the function does not return anything
function sayHello(): void{
    console.log("Hello");
}
sayHello();
// never: This means that the function does not return anything and it does not have an endpoint
function throwError(): never{
    throw Error("Error");
}
// Test
//throwError();

export {}