const accountId = 1443
let accountEmail = "nishant@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 //not allowed because const type declaration.

accountEmail = "nis@gmail.com"
accountPassword = "21345"
accountCity = "Pune"


console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional scope. */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

