const name = "Nishant"
const repoCount = 50

// older syntax => String concatenation
// console.log(name + repoCount + "value")

// new syntax => String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Nishant-NS")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
console.log(gameName.endsWith('S'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-7,5)
console.log(anotherString);

const newStringOne = "   Nishant   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://nishant.com/nishant%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('nishant'));
console.log(url.includes('nisa'));

console.log(gameName.split('-'))


// blink method
const contentString = "Hello, world";

console.log(contentString.blink());

const content1String = "Hello, world";

console.log(content1String.bold());
