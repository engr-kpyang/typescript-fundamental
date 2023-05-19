
// Below code used to learn how to compile TS into JS in the dist folder. 
// Pulled from this tutorial: https://www.youtube.com/watch?v=d56mG7DezGs&t=506s
console.log('Hello World');

let age: number = 25
 if (age < 50) {
    age += 10;
 }
console.log(age);


// The rest of typesript fundamental will be referencing tyepscript handbook
// Link: https://www.typescriptlang.org/docs/handbook/intro.html

// Started on 5-9-23
// The Basics

// Creating a function with defined types for each parameter
function createUser(firstName: string, date: Date) {
    console.log(`${firstName}, today is ${date}`);    
}

// incorrect: error: Argument of type 'string' is not assignable to parameter of type 'Date'.
// createUser("Greg", Date());
// correct
createUser("Greg", new Date());


// EVERYDAY TYPES
// Primitives are string, number and boolean
// Always use undercase for these types in Typescript
let thisString: string;
let thisNumber: number;
let thisBoolean: boolean;

// ARRAY
// To specify a an array type like [1,2,3] or ["a", "b", "c"] use <Type>[].
// For example:

let numberArray: number[];
// or
let stringArray: string[];

// This is a generic form, look at Generics
Array<number>
// NOTE: [number] is completely different from Array[], this is in tuple section


// any TYPE
// "any" type can be use whenever I don’t want a particular value to cause typechecking errors.
let thisObj: any = {x: 0}

// None of the following lines of code will throw compiler errors but it will throw errors in debug
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
// thisObj.foo();
// thisObj();
// thisObj.bar = 100;
// thisObj = "hello";
// const n: number = thisObj;


// noImplicitAny
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.


// Type annotation on variables
let thisVariable: boolean = true;



// FUNCTIONS
// This is the primary way of passing data around in Javascript. 
// Typescript allows us to specify both the INPUT and OUTPUT VALUES of the function.

// parameter type annotation
function sayHello(greetingMessage: string, person: string) {
    console.log(`${greetingMessage}, ${person}!`);
}

// correct
sayHello("Hello there", "David")

// Type error will be thrown
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// sayHello(23, "david")


// Having return types.
// In this example, I had 2 parameters, which are both number types BUT it returns a string.
// Transform the answer variable of type number to string
function addNumbers(x: number, y: number): string {
    let answer: number = x + y
    return answer.toString()
}

console.log(typeof(addNumbers(4,5)));
console.log(addNumbers(4,5));


// Anonymous functions are a little bit different from function declarations.
// When a function appears in a place where TypeScript can determine how it’s
// going to be called, the parameters of that function are automatically given types.
const names = ["alice", "bob", 'claire']

// anonymous function
names.forEach(function(eachName) {
    // auto-assign the type string to eachName
    console.log(eachName.toUpperCase());
})
// arror function
names.forEach((eachName) => {
     // auto-assign the type string to eachName
    console.log(eachName.toUpperCase());
})
// This is called contextual typing


// OBJECT TYPES
