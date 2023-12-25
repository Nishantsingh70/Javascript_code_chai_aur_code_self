// const userEmail = "nishant@gmail.com"
// const userEmail = ""
const userEmail = []


if(userEmail){
    console.log("Got user email..")
}
else{
    console.log("Don't have user email..")
}


// falsy values:
// false, 0, -0, bigInt, 0n, "", null, undefined, NaN

// truthy values:
// "0", "false", " ", [], {}, function(){}

const userEmail1 = []

if (userEmail1.length === 0){
    console.log("Array is empty..")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty..")
}

/*

false == 0    // true
flase == ''   // true
0 == ''       // true

*/

// nullish coalescing operator (??) : Null, undefined => return first non null or not undefined value.

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
var1 = undefined ?? 15
var2 = undefined ?? 15 ?? null
var3 = undefined ?? 5 ?? null
var4 = undefined ?? null ?? null ?? true
var5 = undefined ?? null ?? "ABC"
var6 = undefined ?? null ?? 15
var7 = undefined ?? "-" ?? null ?? "null"
 
console.log(val1)
console.log(val2)
console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)
console.log(var5)
console.log(var6)
console.log(var7)

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")
