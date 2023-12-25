/*

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

// shift + Alt + down key => copy the selected code lines below that code.

const month = 5
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("default match")
        break;
}

// ***************** important point ************************
// If we comment all the break statement then it will executed all the statement after matching the correct case without checking
// the case number except default.


