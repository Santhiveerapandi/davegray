class Coder {
    /* name: string
    music: string
    age: number
    lang: string */
    // Note if you are using constructor with visibility keywords no need to declare prop variable
    secondLang !: string
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}
const Veera = new Coder("K.Santhiveerapandi", "rock", 38)
console.log(Veera.getAge())
// console.log(Veera.age)
// console.log(Veera.lang);
///////////////////////////////////////////
// Subclass
class WebDev extends Coder {
    constructor(
        public computer:string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }
    public getLang(){
        return `Hello I write ${this.lang}`
    }
}
const Meena = new WebDev("Dell", "Meena", "Lofi", 30)
console.log(Meena.getLang());
// console.log(Meena.age)
// console.log(Meena.lang)
////////////////////////////////////////////////
interface Musician {
    name: string,
    instrument: string,
    play(action:string): string
}
//once implements interface all of the property need to be implement in class
class Guitarist implements Musician {
    name: string
    instrument: string
    constructor(name:string, instrument:string) {
        this.name = name
        this.instrument = instrument
    }
    play(action:string):string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}
const Page = new Guitarist('Veera', 'guitar')
console.log(Page.play('strums'))
/////////////////////////////////////////////////////
class Peeps {
    static count: number = 0
    static getCount() {
        return Peeps.count
    }
    public id:number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}
const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)
////////////////////////////////////////////////
// Getters and setter
class Bands {
    private dataState: string[]
    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el=> typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}
const myBands = new Bands()
myBands.data = ['Neil young', 'Led zep']
console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Top']
console.log(myBands.data)
// myBands.data = ['Van Halen', 3300]

// Lesson 07: Index Signature
/* interface TransactionObj {
    readonly [index: string]: number
} */
interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}
const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
} 

console.log(todayTransactions.Pizza)
console.log(todayTransactions['Pizza'])

let prop:string = 'Pizza'
console.log(todayTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total=0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todayTransactions))
// todayTransactions.Pizza= 40  //Readonly therefore not allow to assign
// console.log(todayTransactions['Veera']) //undefined
////////////////////////////////////////////////////////////////////
interface Student {
    [key:string]: string | number | number[]| undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student= {
    name: "Veera",
    GPA: 4.0,
    classes: [100, 200]
}

// console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key]} `)    
}

Object.keys(student).map(key => {
    console.log(student[key])
})

/* Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
}) */

const logStudentKey =  (student: Student, key: keyof Student): void =>{
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'GPA')
logStudentKey(student, 'name')
////////////////////////////////////////////////////
// interface Incomes {
//     [key: string]: number
// }
type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number | string>
const monthlyIncome : Incomes = {
    salary: 50000,
    bonus: 4000,
    sidehustle: 990
}

for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof Incomes])
}

/////////////////////////////////////////////////////////
// Lesson 08: Generic 
const echo = <T> (arg: T): T => arg
const isObj = <T> (arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !==null)
}
console.log(`isObj Generic function test`)
console.log(isObj(true))
console.log(isObj('Veera'))
console.log(isObj([1,2,3]))
console.log(isObj({name: "K.Santhiveerapandi", age: 38}))
console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Veera'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name: "K.Santhiveerapandi"}))
console.log(isTrue([]))
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    value: T,
    is: boolean,
}
const checkBoolValu = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value:arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value:arg, is: false}
    }
    return {value:arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T):T=> {
    return user
}

console.log(processUser({id:1, name:"Veera"}))
// console.log(processUser({name:"Veera"}))

/////////////////////////////////////////////

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] =>{
    return users.map(user=> user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
]
// Ref: https://jsonplaceholder.typicode.com/users
console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

//Generic
class StateObject<T> {
    private data: T
    constructor (value: T) {
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject<string>("Veera")
console.log(store.state)
store.state = "Meena"
console.log(store.state)
// store.state = 30

const mystate = new StateObject<(string | number| boolean)[]>([15])
mystate.state = (['Veera', 38, true])
console.log(mystate.state)

// Lesson 09 : Utility Types

//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>):Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment ={
    studentId: "Compsci123",
    title: "Final Project",
    grade: 0,
}
console.log(updateAssignment(assign1, {grade: 100}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 100})

// Required and readonly

const recordAssignment= (assign: Required<Assignment>):Assignment => {
    //Send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true }

recordAssignment({...assignGraded, verified:true})

// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}
//Literal Type
type Students = 'Veera' | 'Chitra' | 'Meena'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Veera: "A",
    Chitra: "B",
    Meena: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Veera: { assign1: 89, assign2: 98},
    Chitra: { assign1: 76, assign2: 88},
    Meena: { assign1: 76, assign2: 15},
}

//Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>
const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B" >
// Nonnullable
type AllPossibleGrades = 'Veera' | 'Chitra' | 'Meena' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return Type
// type newassign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - Helps us with the Return type
interface User {
    id: string,
    username: string,
    email: string,
}

const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err=> {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}
// console.log(fetchUsers())
type FetchUsersReturnType=Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users=> console.log(users))