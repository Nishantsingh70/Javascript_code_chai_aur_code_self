// Object literal
const user = {
    username: "Nishant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);                                  // {}
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);                                      window object

//===============================================================

// constructor function  (new keyword)
/*

 const promiseOne = new Promise()
 const date = new Date()                
 here new is the constructor function. It allows you to create multiple instances/new context from 
 single object literal. It will create new oempty object for you everytime.

*/

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);  // [Function: User] // constructor property is the reference of itselt only.

let user1 = userOne instanceof User
let user2 = userTwo instanceof User
console.log(user1);
console.log(user2);
if(user1 === user2){
    console.log("Equal")
}

