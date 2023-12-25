// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// heroPower.nishant()

Object.prototype.nishant = function(){
    console.log(`nishant is present in all objects`);
}

// heroPower.nishant()  //Set the method in parent so it will be accessible below the child also.
// myHeros.nishant()

Array.prototype.heyNishant = function(){
    console.log(`Nishant says hello`);
}

// myHeros.heyNishant()   
// heroPower.heyNishant()


//=====================================================


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TASupport.__proto__)
console.log(TASupport.__proto__.isAvailable)
console.log(TASupport.isAvailable)

Teacher.__proto__ = User

console.log(Teacher.__proto__)
console.log(Teacher.__proto__.name)
console.log(Teacher.__proto__.email)
console.log(Teacher.name)
console.log(Teacher.email)


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.__proto__)
console.log(TeachingSupport.__proto__.makeVideo)
console.log(TeachingSupport.makeVideo)



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()