// for of => It is used to print the direct value.
// Object is not iterable in for of loop.

// ["","",""]
// [{},{},{}]


// for of loop with array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);    
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    console.log(`Each chr is ${greet}`)
}



// Maps => It holds key value pair and it does not contain any duplicate keys.
const map = new Map()
 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IND', "India")
map.set('IN', "Indonesia")
map.set('IN', "India")

console.log(map)

// for of loop with map
for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key + ":- " + value)
}

// for of loop with object

const myobj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

for(const [key, value] of myobj){
    console.log(key + ":- ", value) // give error
}

for(const [key, value] of Object.entries(myobj)){
    console.log(key + ":- ", value) 
}

