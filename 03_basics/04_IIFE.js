// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Sometimes there is a problem with pollution in global scope - whatever declarations/ variables in global space are there to avoid that we use IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
