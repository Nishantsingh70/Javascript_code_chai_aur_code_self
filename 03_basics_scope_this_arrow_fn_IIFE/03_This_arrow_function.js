const user = {
    username: "Nishant",
    price: 999,

    // this is refering to current context.
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sammy"
user.welcomeMessage()

// console.log(this)

// ********************************************** Important Point ******************************************************

// inside browser global execution context is window object
// outside browser/ local environment global execution context is empty object ie. {}.

function chai(){
    let username = "Nishant"
    console.log(this)  // => return global scope with multiple values/paramters.
    console.log(this.username) // => Undefined
}

// chai()

// Above chai(), this is working inside the object but not working inside the function. 

const chai1 = function(){
    let username = "Nishant"
    console.log(this)  // => return global store with multiple values/paramters.
    console.log(this.username)  // => Undefined
}

// chai1()

// Above chai1(), this is working inside the object but not working inside the function. 

const chai2 = () => {
    let username = "Nishant"
    console.log(this)  // => {}
    console.log(this.username)  // => Undefined
}

chai2()


// *********************************************** Arrow function *****************************************************
// method1:
const addTwo = (num1, num2) => {
    return num1 + num2
}

// method2: // implicit return
const addTwo2 = (num1, num2) => num1 + num2

// method3:
const addTwo3 = (num1, num2) => (num1 + num2)

const addTwo4 = (num1, num2) => {username: "Nishant"}
const addTwo5 = (num1, num2) => ({username: "Nishant"})



console.log(addTwo(8,4))    // 12
console.log(addTwo2(1,4))   // 5
console.log(addTwo3(3,4))   // 7
console.log(addTwo4(3,4))   // undefined
console.log(addTwo5(3,4))   // { username: 'Nishant' }

const myArray = [2,3,4,5,8]

// myArray.forEach(() => {})


