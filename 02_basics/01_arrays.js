// array

// JavaScript arrays are resizable
// can contain a mix of different data types
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 
// A shallow copy of an object is a copy whose properties share the same references. As a result, when you change either the source or the copy, you may also cause the other object to change too. 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
const newArr2 = myArr.join('-') 

console.log(myArr);
console.log( newArr);


// slice, splice

//The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end.
// array.slice(startIndex, endIndex)
// The slice() method does not change the original array.
console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// The splice() method adds and/or removes array elements. The sPlice() method selects from a given start, up to a (Inclusive) given end.

// The splice() method overwrites the original array.
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");