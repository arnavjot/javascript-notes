// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('en-IN'));
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // 0 - Jan months start from 0 in JavaScript 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD
let myCreatedDate = new Date("01-14-2023") // MM-DD-YYYY
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // in milliseconds 
console.log(myCreatedDate.getTime()); // "01-14-2023" FOR THIS DATE 
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // Monday - 1, Tuesday - 2

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
console.log(newDate.toLocaleString('en-IN', {
    weekday: "long",
}));