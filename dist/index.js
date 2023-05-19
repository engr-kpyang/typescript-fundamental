"use strict";
console.log('Hello World');
let age = 25;
if (age < 50) {
    age += 10;
}
console.log(age);
function createUser(firstName, date) {
    console.log(`${firstName}, today is ${date}`);
}
createUser("Greg", new Date());
let thisString;
let thisNumber;
let thisBoolean;
let numberArray;
let stringArray;
Array;
let thisObj = { x: 0 };
let thisVariable = true;
function sayHello(greetingMessage, person) {
    console.log(`${greetingMessage}, ${person}!`);
}
sayHello("Hello there", "David");
function addNumbers(x, y) {
    let answer = x + y;
    return answer.toString();
}
console.log(typeof (addNumbers(4, 5)));
console.log(addNumbers(4, 5));
const names = ["alice", "bob", 'claire'];
names.forEach(function (eachName) {
    console.log(eachName.toUpperCase());
});
names.forEach((eachName) => {
    console.log(eachName.toUpperCase());
});
function printCoord(points) {
    return `You are located at coordinate x:${points.x} and y: ${points.y}`;
}
console.log(printCoord({ x: 456, y: 789 }));
function FooBar(obj) {
    return `There are ${obj.foo} and there are ${obj.bar}`;
}
console.log(FooBar({ foo: "food", bar: "fun" }));
function printId(id) {
    console.log("Your ID is:" + id);
}
printId(1010);
printId("a4tgjlwka4o");
//# sourceMappingURL=index.js.map