
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
// This refers to Javascript values with properties. 
// properties are accessible by using dot
function printCoord(points: {x: number, y: number}): string {
    return `You are located at coordinate x:${points.x} and y: ${points.y}`   
}

console.log(printCoord({x: 456, y: 789}));

// optional properties
function FooBar(obj: {foo: string, bar?: string}): string {
    return `There are ${obj.foo} and there are ${obj.bar}`
}

console.log( FooBar({foo:"food", bar:"fun"}));

// UNION TYPES
// This is a type that is formed from 2 or more types

// This says that id can be either a number or a string
function printId(id: number | string) {
    console.log("Your ID is:" + id);
}

printId(1010)
printId("a4tgjlwka4o")

// NOTE - typescript will only allow an operation if it is valud for EVERY member of the union. 
// For example, if we have a union of string | number, we CANNOt use methods that exclusive to one or the other.

function printIdTwo(id: number | string) {
    // In this example this will not work because toUpperCase
    // is specific to only strings as it does not exist on type number
    // console.log(id.toUpperCase());
}
//SOLUTION to this -> narrowing!
// Defined: Narrowing occurs when TypeScript can deduce a more
// specific type for a value based on the structure of the code.
function printIdThree(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// Another example
// Use a function like Array.isArray
function helloEveryone(people: string[] | string) {
    // If parameter people is a string array
    if (Array.isArray(people)) {
        console.log("Hello, " + people.join(" and "));   
    }
    //  If parameter people is a single name
    else {
        console.log("Hello individual, " + people);
    }
}

helloEveryone(["david", "steven", "harry"])
helloEveryone("OnlyOne")

// If they all members have a common property, it can be used without narrowing

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3)
}

console.log(getFirstThree([1,2,3,4,5]));
// returns 123

console.log(getFirstThree("firstThree"));
// returns "fir"


// TYPE ALIAS
//  This allows us to define types.

type Point = {
    x: number,
    y: number
}

function printCoordTwo(thisPoint: Point) {
    console.log("The value of x is: " + thisPoint.x);
    console.log("The value of y is: " + thisPoint.y);    
}

printCoordTwo({x: 24, y: 25})

// type alias can be given a name to any type at all, not just an objec type.
type UserID = number | string;


// INTERFACES
// Another way to define an object type

interface CustomerID {
    name: string,
    idNum: number
}

function printCustomerInfo( customerInfo: CustomerID) {
    return `${customerInfo.name} has an ID of ${customerInfo.idNum}`
}

console.log(printCustomerInfo({name: "SirKnight", idNum: 985468735468}));


// KEY DIFFERENCE BETWEEN TYPES AND INTERFACES
// New Properties cannot be added to Types. However they can be added via intersections
type LivingOrganism = {
    name: string;
}

type MultiCellOrganism = LivingOrganism & {
    CellCount: number;
}

// const thisNewMultiOrganism = someFuncToGetOrganism()
// thisNewMultiOrganism.name
// thisNewMultiOrganism.CellCount

// Interfaces ALLOWS new properties to be added. Extending an interface
interface LivingOrganism2 {
    name: string;
}

interface MultiCellOrganism2 extends LivingOrganism {
    CellCount: number;
}

// const thisNewMultiOrganism = someFuncToGetOrganism()
// thisNewMultiOrganism.name
// thisNewMultiOrganism.CellCount


// Important points
//  - Type aliases cannot participate in declaration merging, but interfaces can.
// Interfaces may only be used to declare the shape of an object, not rename primitives.
// Interface names will always appear in their original form in error messages, but only when they are used by name.

// Advice: Use Interface until you need features from Type.


// TYPE ASSERTIONS
// Sometimes I will have info about the type of a value that TS will not know about.
// In this case pulling a HTML element using document.getElementbyId.
// TS will only know that it is only a HTML element but I will know that the HTMl will always have a HTMLTitleName with a given ID.

// Use type assertions to specify a more specific type
// Her I am asserting that TitleName is of type TitleNameElement
const TitleName = document.getElementById("Title_Name") as TitleNameElement;

// Note: Type Assertions are removed from the compiler so it won't affect runtime behavior.




// LITERAL TYPES
// We can refer to specific strings and numbers in type positions. By themselves they are not very valuable however-
// by combining literals into unions, I can express a much more useful concept - functions that only accept a certain set of known values.

let thisChangingString = "Hello to only you"
thisChangingString = "Nevermind, hello to world only"
// thisChangingString; -> This will be described as of type string

const onlyOneEarth = "Planet Earth"
// onlyOneEarth; -> This will show that variable onlyOneEarth is of a literal type, called "Planet Earth"


// Combining Unions 

function printText(s: string, alignment: "left" | "right" | "center") {
    return `${s} is at position ${alignment}`
}

// Works
console.log(printText("hello world", "right"));

// Does not work
// console.log(printText("hello world", "floating")); -> error message: Argument of type '"floating"'
// is not assignable to parameter of type '"left" | "right" | "center"'.




// LITERAL INFERENCES
// If I create a variable where I think it should be inferenced as a literal
// TS will find it as an error.
// To get around this I need to add -> as const;

// const thisRequest = {url: "https://someRandonAPI.com", method: "GET"} as const;
// handleRequest(thisRequest.url, thisRequest.method)





// NULL and UNDEFINED
// Javascript has 2 primitive values used to signal absent or uninitialized values: null and undefined.

// Typescript has 2 corresponding types by the same name. How they behave depends if strictNullChecks option is on or off in tsconfig.json file.
// It is RECOMMENDED to have this option turned on.
// With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value



// NON-NULL ASSERTION OPERATION (POSTFIX !)

// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking.
// Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
    
    function liveDangerously(x?: number | null) {
      // No error
      console.log(x!.toFixed());
    }

// Just like other type assertions, this doesn’t change the runtime behavior of your code,
// so it’s important to only use ! when you know that the value can’t be null or undefined.




// NARROWING IN THE TYPESCRIPT HANDBOOK