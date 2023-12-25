const myArr = [0,1,2,3,4,5, "Nishant"]
console.log(myArr)
console.log(myArr[0])

const myHeros = ["Shaktiman", "Naagraj"]
console.log(myHeros)

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1])

// Array Method
myHeros.forEach((i)=> {
    console.log(i)
})
 
myArr.forEach((i)=> {
    console.log(i)
})

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join()

console.log(myArr.includes(9))
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, splice

console.log("A", myArr)
const myn1 =  myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)


const myn2 =  myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr)