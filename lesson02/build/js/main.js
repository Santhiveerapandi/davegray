"use strict";
// Lesson 01
let user = {
    firstName: "Santhiveerapandi",
    lastName: "Kamaraj",
    age: 38,
    dob: "03-03-1985",
    job: "Fullstack Developer",
    aadhaar: 9975,
    pan: "DDGPS6771A"
};
console.log(user);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(b * c);
//Lesson 02: Basic Types
const sum = (a, b) => {
    return a + b;
};
///// Union Type
let postId;
let isActive;
let re = /\w+/g;
//Lesson 03: Arrays & Objects
let stringArr = ["Santhiveerapandi", "Kamaraj", "Fullstack Developer", "DDGPS6771A"];
let guitars = ["Santhiveerapandi", "Kamaraj", 38, "03-03-1985", "Fullstack Developer", 9975, "DDGPS6771A"];
let mixedData = ["Santhiveerapandi", "Kamaraj", 38, true];
console.log(stringArr);
stringArr[0] = "Natarajan";
stringArr.push("Meenalakshmi");
console.log(stringArr);
guitars.unshift('Meena');
console.log(guitars);
////Comparison - True
// guitars = stringArr
// mixedData = guitars
let test = [];
let bands = [];
///Tuple - Strict datatype array elements
let myTuple = ['Santhiveerapandi', 38, true];
let mixed = ['Santhiveerapandi', 38, true];
/// myTuple = mixed (not possible equal)
/// Objects (Note: Array also object)
let myObj = {
    prop1: "Santhiveerapandi",
    prop2: 'Kamaraj',
    prop3: 38,
    prop4: true
};
console.log(typeof mixed, typeof myObj);
let evh = {
    name: "Veera",
    age: 38,
    albums: [1985, 5150, 'OU812'],
    active: false
};
let jp = {
    name: "Meena",
    albums: [1993, 5150, 'OU812'],
    active: true
};
///Comparison - true
// evh = jp
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
/// Enums
/// "Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
/// Literal Types
let myName;
// myName = 'Meena' - False
let userName;
// userName = "" Any one of above value only accept
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(`Hello !`);
logMsg(add(2, 3));
// logMsg(add('San', 3))
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Rest parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(343, 811, 2180, 2424));
// never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
