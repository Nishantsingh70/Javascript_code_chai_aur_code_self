const tinderUser = new Object()
// const tinderUser = {}   // both type of declaration is fine.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nishant",
            lastname: "Singh"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname.userfullname.lastname)
console.log(regularUser["fullname"]["userfullname"]["firstname"])

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

 
const obj4 = { obj1, obj2 }
console.log(obj4)
 
const obj5 = Object.assign({}, obj1, obj2, obj3)  //assign method
console.log(obj5)
 
const obj6 = { ...obj1, ...obj2, ...obj3 }   // spread method
console.log(obj6)

const users = [
    {
        id: 1,
        email: "nishant@gmail.com"
    },
    {
        id: 2,
        email: "nishantsin@gmail.com"
    },
    {
        id: 3,
        email: "nishantsingh@gmail.com"
    }
]

console.log(users)
console.log(users[1].email)


console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  // Every key & value converted into array.

console.log(tinderUser.hasOwnProperty('isLogged'))   // to check the key exist in it or not.
console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// **************************************** Object de structure *******************************************

 

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Nishant"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)

// API response come in json form.
// https://api.github.com/users/hitestchoudhary

