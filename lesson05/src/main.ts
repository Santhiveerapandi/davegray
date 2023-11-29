// Lesson 05: Type Assertion OR Type Casting
//Type Aliases
type One = string
type Two = number | string
type Three = 'Hello'

//convert to more or less specific
let a: One = 'Hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One> 'World'
let e = <Two> 'World'

const addConcat = (a:number, b:number, c:'add'|'concat'): Two => {
    if (c === 'add') return a+b
    return ''+a+b
}

let myVal: string = addConcat(2,2,'concat')as string
let nextVal: number = addConcat(2,2,'add')as number
console.log(myVal)

// The DOM

const img = document.querySelector('img')!
const myimg = document.getElementById('#img') as HTMLImageElement
const nextimg = <HTMLImageElement> document.getElementById('#img') 

// img.src
// myimg.src