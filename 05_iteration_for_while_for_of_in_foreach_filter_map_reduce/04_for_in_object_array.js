// for in is used to print the keys.
// Map is not iterable in for in loop.


const myobject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "Swift by Apple"
}

console.log(myobject)

// for in loop with objects
for (const key in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}`)
}

// for in loop with array
const programming = ["js","rb","py","cpp","java"]

for (const key in programming) {
    console.log(programming[key])
}

// for in loop with map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)  // map is not iterable in for in loop.
}

for (const [key,value] in map) {
    console.log(key)  // map is not iterable in for in loop.
}