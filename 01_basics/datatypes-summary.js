//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number datatype
const scoreValue = 100.3 // Number datatype - no special decimal datatype this is a number only

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n // bigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack (Primitive) , Heap (Non-Primitive / Reference)

let myYoutubename = "hqwuidwd.com"

let anothername = myYoutubename
anothername = "abcdef"

console.log(myYoutubename)
console.log(anothername) // ONLY anothername will be changed because in stack memory copy is created



let userOne = {
    email : "user@google.com",
    upi: "user@paytm"
}
let userTwo = userOne 
userTwo.email = "anku@email.com"

console.log(userOne.email)
console.log(userTwo.email) // Both will have same value because in heap only reference is given - copy is not created