//CONVERSION TO NUMBER

// let score = "33"
// let score = "33abc" //outputs NaN - NaN is a number 
// let score = null //outputs 0 after converting to number
// let score = undefined //outputs NaN
let score = true // false
// let score = "anku" //NaN

// console.log(typeof score)

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0





// CONERSION TO BOOLEAN 

// let isLoggedIn = 1
// let isLoggedIn = "" // empty -> false
let isLoggedIn = "anku" //not empty -> true
let boolIsLoggedIn = Boolean(isLoggedIn)
//console.log(boolIsLoggedIn) // returns true




//CONVERSION TO STRING

let someNumber = 56
let stringNum = String(someNumber)
console.log(typeof stringNum)
console.log(stringNum);
