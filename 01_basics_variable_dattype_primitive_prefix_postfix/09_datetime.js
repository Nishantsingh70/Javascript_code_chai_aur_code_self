let myDate = new Date()

console.log(myDate)              // 2023-09-25T10:05:24.114Z
console.log(myDate.toString());  // Mon Sep 25 2023 15:35:24 GMT+0530 (India Standard Time)
console.log(typeof myDate.toString())  // String
console.log(myDate.toDateString());    // Mon Sep 25 2023
console.log(myDate.toLocaleString());  // 9/25/2023, 3:35:24 PM
console.log(myDate.toISOString());     // 2023-09-25T10:05:24.114Z
console.log(myDate.toJSON());          // 2023-09-25T10:05:24.114Z
console.log(myDate.toLocaleTimeString());  // 3:35:24 PM
console.log(myDate.toTimeString());   // 15:35:24 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());    // Mon, 25 Sep 2023 10:05:24 GMT

// let myCreatedDate = new Date(2023,0 ,23)
// let myCreatedDate = new Date(2023,0 ,23, 5, 3)
// let myCreatedDate = new Date("2023-01-15")

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate)    // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toString())  // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toDateString())  // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString())  // 1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // give time in miliseconds from 1st January, 1970.
console.log(myCreatedDate.getTime())  // give time in miliseconds from 1st January, 1970.
console.log(Date.now())
console.log(Math.floor(Date.now()/1000))  // give time in seconds from 1st January, 1970.


let newDate = new Date()
console.log(newDate)  // 2023-09-25T10:24:50.945Z
console.log(newDate.getDate())  // 25
console.log(newDate.getFullYear()) // 2023
console.log(newDate.getHours())    // 15
console.log(newDate.getMonth() + 1)    // 9
console.log(newDate.getDay())      // 1
console.log(newDate.getTimezoneOffset())  // -330
console.log(newDate.getMilliseconds())  // 60

console.log(newDate.toLocaleDateString())  // 17/12/2023
console.log(newDate.toLocaleString())  // 17/12/2023, 7:27:22 pm

console.log(
    newDate.toLocaleDateString('dafault', {
    weekday: "long"
    })
)                        // Sunday


