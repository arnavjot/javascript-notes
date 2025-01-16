"use strict" // treat all JS code as newer version
// - semicolons are optional

// alert("hello") //works in browser's console but this is node.js


// console.log(3
//     +
//     3
// ) //works but code should be readble

// console.log("abc") console.log("abc") // this gives error no semicolon and no next line

// console.log(3); console.log("abc") //works but make it readable
 
// readabilty should be high
console.log(3)
console.log("abc") // this is correct

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//TYPE OF NULL IS OBJECT???????????

/*null
// This stands since the beginning of JavaScript
typeof null === 'object';
In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. 

A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.


In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object (it isn’t, it’s a primitive value, consult my blog post on categorizing values for details). This is a bug and one that unfortunately can’t be fixed, because it would break existing code. Let’s explore the history of this bug.

The “typeof null” bug is a remnant from the first version of JavaScript. In this version, values were stored in 32 bit units, which consisted of a small type tag (1–3 bits) and the actual data of the value. The type tags were stored in the lower bits of the units. There were five of them:

000: object. The data is a reference to an object.
1: int. The data is a 31 bit signed integer.
010: double. The data is a reference to a double floating point number.
100: string. The data is a reference to a string.
110: boolean. The data is a boolean.
That is, the lowest bit was either one, then the type tag was only one bit long. Or it was zero, then the type tag was three bits in length, providing two additional bits, for four types.*/