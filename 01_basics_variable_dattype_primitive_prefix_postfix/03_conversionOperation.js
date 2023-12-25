//let score = 33
//let score = "33ABC"
//let score = null
//let score = true
let score

console.log(typeof score)
console.log(typeof(score)) 

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber)

// Conversion
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN


// let isLoggedIn = 1  => true
// let isLoggedIn = ""  => false
// let isLoggedIn = "Nishant" => true
// let isLoggedIn = null => false
let isLoggedIn = undefined  // => false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// ******************************** Operations **************************************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2*2);
console.log(2%3);
console.log(2**3);
console.log(2-2);
console.log(2/2);

let str1 = "Hello "
let str2 = "Nishant"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)  // 1
// console.log(true+)  //give error
console.log(+"")  // 0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter)

console.log("Prefix and Postfix Operator");
let gameCounter_1 = 100
let post = gameCounter_1++  //In postfix, first use the value and then increase or decrease the value.
console.log(post)
let pre = ++gameCounter_1   //In prefix, first increase or decrease the value and then use it.
console.log(gameCounter_1)


// console.log(gameCounter_1++)
// console.log(gameCounter_1)
// console.log(++gameCounter_1)
// console.log(gameCounter_1)

