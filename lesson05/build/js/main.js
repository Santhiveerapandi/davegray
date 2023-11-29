"use strict";
//convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
let d = 'World';
let e = 'World';
const addConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addConcat(2, 2, 'concat');
let nextVal = addConcat(2, 2, 'add');
console.log(myVal);
// The DOM
const img = document.querySelector('img');
const myimg = document.getElementById('#img');
const nextimg = document.getElementById('#img');
// img.src
// myimg.src
