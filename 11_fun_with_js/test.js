const myArr = []
//%DebugPrint(myArr)


// continuous(Packed), holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// packed SMI elements

arrTwo.push(6.0)
// packed double elements

arrTwo.push('8')
// packed elements

arrTwo[10] = 11
// holey elements (Because it included multiple type and hole also)

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// holes are the most expensive in javascript.


// Optimization diagram (greater to lower flow)
// SMI > Double > Packed
// H_SMI > H_Double > H_Packed

const arrFour = new Array(3)
// just 3 holes created. Holey SMI elements
arrFour[0] = '1'  // Holey elements
arrFour[1] = '2'  // Holey elements
arrFour[2] = '3'  // Holey elements

const arrFive = []
arrFive.push('1')  // Packed Element
arrFive.push('2')  // Packed Element
arrFive.push('3')  // Packed Element

const arrSix = [1,2,3,4,5]

arrSix.push(Infinity)   //  Packed Double
arrSix.push(NaN)        //  Packed Double

// for, for of, for in, foreach, map, filter