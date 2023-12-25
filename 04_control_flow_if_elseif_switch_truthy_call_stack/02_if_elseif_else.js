// if

if(2==2){
    console.log("1")
}

if(2=="2"){
    console.log("2")
}

if(2===2){
    console.log("3")
}

if(2==="2"){
    console.log("4")
}

// coparison operator => <, >, <=, >=, ==, ===, !=, !==

const temperature = 41

if (temperature < 41){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temp greater than 41")
}

console.log("Temperature is greater than 50")

const balance = 1000
if (balance > 500 ) console.log("Enough balance");

//not a good code
if (balance > 500 ) console.log("Enough balance"),
console.log("Test3");

// nested if condition
if(balance > 500){
    console.log("greater than 500")
}
else if(balance < 750){
    console.log("greater than 750")
}
else{
    console.log("Test")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}


if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In..")
}




