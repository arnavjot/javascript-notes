// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// Sometimes there is a problem with pollution in global scope - whatever declarations/ variables in global space are there to avoid that we use IIFE

(function chai2(){
    // named IIFE
    console.log(`DB CONNECTED`);
})() // Semicolon not there so there will be an error - because IIFE doesn't know where to stp the context - to end add ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
