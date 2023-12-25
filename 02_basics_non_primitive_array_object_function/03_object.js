// singleton => when we create as literal then singleton will not create.
// if we are making it from constructor then singleton will create

// Object thorugh constructor
Object.create

// Object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Nishant",
   "full name": "Nishant Singh",
    [mySym]: "mykey1",
    age: 26,
    location: "Jaipur",
    email: "nishant.singh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.age)
console.log(jsUser["age"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof (jsUser.mySym))
console.log(typeof (jsUser[mySym]))

myArray = ["N", "I"]
console.log(myArray)

jsUser.email = "nishantsingh@microsoft.com"

// Object.freeze(jsUser)
jsUser.email = "nishantsingh@hcl.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUser.greetingTwo())

 