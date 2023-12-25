function sayMyName(){
    console.log("N")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("t")  
}

/* sayMyName => This is the reference of function */
//sayMyName

/* sayMyName() => This is the execution of function */
//sayMyName()

// parameters
function addTwoNumbers(number1, number2){
    //console.log(number1 + number2)
    /* let result = number1 + number2
    return result
    */
    return number1 + number2
}

// arguments
addTwoNumbers()
addTwoNumbers(3,2)
addTwoNumbers(3,2,4,3)
addTwoNumbers(3,"2")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(2,5)
console.log("Result: ", result)
console.log(`"Result: ${result}"`)


function addNumbers(){
    let sum = 0
    for(let i=0; i< arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
}

console.log(addNumbers(4,3,4,2))

function loginUserMessage(username= "Sammy"){
    // if (username === undefined){
    if (!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nishant"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

// rest operator: ...num1
function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(200, 400, 500)) 

// rest operator: ...num1
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

 

// val1 = 200, val2 = 400, num1 = [500, 300]
console.log(calculateCartPrice2(200, 400, 500, 300))

const user = {
    username: "Nishant",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "sam",
    price: 299
})


const myNewArray = [290, 390, 499, 599]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]))