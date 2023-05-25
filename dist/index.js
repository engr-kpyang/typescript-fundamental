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
function printIdTwo(id) {
}
function printIdThree(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function helloEveryone(people) {
    if (Array.isArray(people)) {
        console.log("Hello, " + people.join(" and "));
    }
    else {
        console.log("Hello individual, " + people);
    }
}
helloEveryone(["david", "steven", "harry"]);
helloEveryone("OnlyOne");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));
console.log(getFirstThree("firstThree"));
function printCoordTwo(thisPoint) {
    console.log("The value of x is: " + thisPoint.x);
    console.log("The value of y is: " + thisPoint.y);
}
printCoordTwo({ x: 24, y: 25 });
function printCustomerInfo(customerInfo) {
    return `${customerInfo.name} has an ID of ${customerInfo.idNum}`;
}
console.log(printCustomerInfo({ name: "SirKnight", idNum: 985468735468 }));
//# sourceMappingURL=index.js.map