// Lesson 01
let user = {
    firstName: "Santhiveerapandi",
    lastName: "Kamaraj",
    age: 38,
    dob: "03-03-1985",
    job: "Fullstack Developer",
    aadhaar: 9975,
    pan: "DDGPS6771A"
}

console.log(user)

let a: number = 12
let b:number = 6
let c:number = 2
console.log(a / b)
console.log(b * c)
//Lesson 02: Basic Types
    const sum = (a:number, b:number) => {
        return a + b
    }
    ///// Union Type
    let postId: number | string
    let isActive: number | boolean

    let re: RegExp = /\w+/g

//Lesson 03: Arrays & Objects
let stringArr = ["Santhiveerapandi", "Kamaraj","Fullstack Developer", "DDGPS6771A"]
let guitars = ["Santhiveerapandi","Kamaraj",38, "03-03-1985","Fullstack Developer",9975,"DDGPS6771A"]
let mixedData = ["Santhiveerapandi","Kamaraj",38, true]

console.log(stringArr)
stringArr[0]="Natarajan"
stringArr.push("Meenalakshmi")
console.log(stringArr)
guitars.unshift('Meena')
console.log(guitars)

////Comparison - True
// guitars = stringArr
// mixedData = guitars

let test = []
let bands: string[] = []

///Tuple - Strict datatype array elements
let myTuple: [string, number, boolean] = ['Santhiveerapandi', 38, true]
let mixed = ['Santhiveerapandi', 38, true]
/// myTuple = mixed (not possible equal)

/// Objects (Note: Array also object)
let myObj = {
    prop1: "Santhiveerapandi",
    prop2: 'Kamaraj',
    prop3: 38,
    prop4: true
}
console.log(typeof mixed, typeof myObj)
// ? if question marked property is optional to assign value
/* type Guitarist = {
    name: string,
    age?: number,
    albums: (string | number)[]
    active: boolean
} */
interface Guitarist {
    name?: string,
    age?: number,
    albums: (string | number)[]
    active: boolean
}
let evh: Guitarist = {
    name: "Veera",
    age: 38,
    albums: [1985, 5150, 'OU812'],
    active: false
}
let jp: Guitarist = {
    name: "Meena",
    albums: [1993, 5150, 'OU812'],
    active: true
}
///Comparison - true
// evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello!`
}
console.log(greetGuitarist(jp))

/// Enums
/// "Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}
console.log(Grade.U)

//Lesson 04: Functions
/// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]
type Guitarist04 = {
    name?: string,
    age: number,
    albums: stringOrNumberArray,
    active?: boolean
}
type userId = stringOrNumber;

/// Literal Types
let myName: 'Veera'
// myName = 'Meena' - False

let userName: 'Veera' | 'Meena' | 'Chitra' | 'Parvathi' | 'Keerthan'
// userName = "" Any one of above value only accept

//Functions
const add = (a:number, b:number):number => {
    return a + b
}

const logMsg= (message:any): void => {
    console.log(message)
}

logMsg(`Hello !`)
logMsg(add(2,3))
// logMsg(add('San', 3))
let subtract = function(c: number, d: number): number {
    return c - d
}
// type mathFunction = (a: number, b: number) => number
interface mathFunction {
    (a: number, b: number): number
} 

let multiply: mathFunction = function(c, d) {
    return c * d
} 
logMsg(multiply(2,2))

// Optional parameter
const addAll = (a: number, b: number, c?:number) => {
    if(typeof c !== 'undefined')
    {
        return a + b + c
    }
    return a + b 
}
// default param value
const sumAll = (a: number = 10, b: number, c:number = 2) => {
    if(typeof c !== 'undefined')
    {
        return a + b + c
    }
    return a + b 
}
// Rest parameter
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(343,811,2180,2424))

// never
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite= () => {
    let i: number = 1;
    while(true) {
        i++
        if(i > 100) break
    }
}
//custom type guard
const isNumber = (value: number): boolean => {
    return typeof value === 'number'? true: false
}
//use of the never type
const numberOrString=(value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}
