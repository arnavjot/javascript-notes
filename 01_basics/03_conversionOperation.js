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
// console.log(typeof stringNum)
// console.log(stringNum);


//****************************** Operations ****************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2**3)
// console.log(12%3)

let str1 = "hello"
let str2 = " anku"

let str3 = str1 + str2 //concatenation 
// console.log(str3);

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32
// console.log("1" + (2 + 2)) // 14

// console.log(+true) // outputs 1
// console.log(+"") // outputs 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //dont use this - ruins the readability

let gameCounter = 100
++gameCounter
console.log(gameCounter++);

