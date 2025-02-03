const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00

let otherNumber = 23.8999
console.log(otherNumber.toPrecision(3)) // 23.9
otherNumber = 123.8999
console.log(otherNumber.toPrecision(3)) // 124
otherNumber = 1123.8999
console.log(otherNumber.toPrecision(3)) // 1.12e+3
otherNumber = 123.8999
console.log(otherNumber.toPrecision(4)) // 123.9

const hundereds = 1000000000
console.log(hundereds.toLocaleString()) // 1,000,000,000
console.log(hundereds.toLocaleString('en-IN')) // 1,00,00,00,000 - Indian

// MATHS

console.log(Math); //object
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(4, 3, 9, 0));
console.log(Math.max(4, 3, 9, 0));

console.log(Math.random()); // between 0 and 1
console.log((Math.random())*10); // between 0 and 10
console.log((Math.random())*10) + 1; // between 1 and 10 - includes decimal points - take floor
console.log(Math.floor((Math.random())*10) + 1); // between 1 and 10

// values between 10 and 20  
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));