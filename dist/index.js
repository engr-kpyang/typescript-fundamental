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
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//# sourceMappingURL=index.js.map