let x = 3;
const y = x++;  //increment the value by 1 after use => Postfix

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  //increment the value by 1 before use => Prefix

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
