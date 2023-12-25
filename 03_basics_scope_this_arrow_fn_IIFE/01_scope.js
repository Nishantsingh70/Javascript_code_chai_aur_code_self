//let a = 10
//const b = 20
//var c = 30
//var c = 400

// Global scope
let a = 50
if (true){
    //local scope

    let a = 10
    const b = 20
    //var c = 30
    //c = 30
    console.log(`"Inner: " ${a} `)
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//}

console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "Nishant"
    function two(){
        const website = "Youtube"
        console.log(username)
    }

    // line by line execution
    // console.log(website)
    two()
}

//one()
if(true){
    const username = "Nishant"
    if(username === "Nishant"){
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// ************************************ Interesting *****************************************

 
console.log(addone(5))
function addone(num){
    return num + 1
}

// addTwo(5,6)

//expression  // hoising
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5,2))

