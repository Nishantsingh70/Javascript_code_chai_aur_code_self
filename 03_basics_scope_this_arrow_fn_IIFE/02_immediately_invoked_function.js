// Immediately Invoked function expression (IIFE) => We use IIFE to ingore the problem of global scope polution.
// Named IIFE vs IIFE


// named IIFE
(function chai(){
    // named IIFE
    console.log("DB Connected")
})(); // => ; is used to stop the context of IIFE

// chai()


// unnamed IIFE
( () => {
    console.log("DB Connected Two")
})();

( (name) => {
    console.log(`"DB Connected Three " ${name}`)
})("Nishant");