console.log("First")
console.log(2 > 1)    //true
console.log(2 < 1)    //false
console.log(2 <= 1)   //false
console.log(2 >= 1)   //true
console.log(2 == 1)   //false
console.log(2 != 1)   //true


console.log("Second")
console.log("2" > 1)   //true
console.log("02" > 1)  //true
console.log("2" < 1)   //false
console.log("02" < 1)  //false


console.log("Third")
console.log(null == 0)  //false
console.log(null >= 0)  //true
console.log(null <= 0)  //true
console.log(null > 0)   //false
console.log(null < 0)   //false


/*
The reason is that an equality check == and comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0, that's why null >= 0 and null <= 0 is true.
*/


console.log("Fourth")
console.log(undefined == 0)  //false
console.log(undefined >= 0)  //false
console.log(undefined <= 0)  //false
console.log(undefined > 0)   //false
console.log(undefined < 0)   //false

// === strict check not only checking the value but also checking its data type. 


console.log("Fifth")
console.log("2" == 2)  // only checking the value. //true
console.log("2" === 2)  // strict check not only checking the value but also checking its data type. //false

