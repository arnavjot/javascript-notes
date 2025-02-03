// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log("2" > 1)
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true - happens due to conversion - comparisons >, <, >=, <= convert null to number treating it as a 0 whereas equality check == doesn't convert thats 


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 

console.log("2" === 2); // strict check