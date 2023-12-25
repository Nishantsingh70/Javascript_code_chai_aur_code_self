const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// map() return the value automatically
// Implicit return
const newNums = myNumbers.map( (num) => num * 10 )
console.log(newNums)


// chain method => apply multiple methods together.
const newNums2 = myNumbers
                          .map((num) => num * 10)
                          .map((num) => num + 1) 
                          .filter((num) => num > 40)
console.log(newNums2)


