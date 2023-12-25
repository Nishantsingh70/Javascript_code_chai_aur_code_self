const score = 100
console.log(score)                     // 100

const balance =  new Number(100)
console.log(balance)                    // [Number: 100]

console.log(balance.toString().length)  // 3
console.log(balance.toFixed(2))         // 100.00


const otherNumber = 123.6754  
console.log(otherNumber.toPrecision(3))  // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString())         // 10,00,000
console.log(hundreds.toLocaleString('en-IN'))  // 10,00,000

// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.MAX_SAFE_INTEGER

// ************************************************** Maths *****************************************************

// run below log in browser console, it will give all the methods
console.log(Math)

console.log(Math.abs(-4))    // 4
console.log(Math.abs(4))     // 4
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.6))  // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.sqrt(9))    // 3
console.log(Math.pow(2,5))   // 32
console.log(Math.min(2, 5, 6, 8))  // 2
console.log(Math.max(2, 5, 7, 10)) // 10


console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 15
const max = 28

console.log(Math.floor(Math.random() * (max - min + 1)) + min)