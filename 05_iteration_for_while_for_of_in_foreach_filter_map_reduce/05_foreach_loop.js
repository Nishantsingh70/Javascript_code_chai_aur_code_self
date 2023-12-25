const coding = ["js","rb","py","cpp","java"]

coding.forEach(function (item) {
    console.log(item)
});

console.log("New output-1")
// arrow function as a call back function
coding.forEach( (item) => {
    console.log(item)
})

console.log("New output-2")
// Defined function then give reference of that function in forEach() loop
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

console.log("New output-3")
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [
    {
        "language": "Javascript",
        "languageFileName": "js"
    },
    {
        "language": "python",
        "languageFileName": "py"
    },
    {
        "language": "java",
        "languageFileName": "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item) 
    console.log(item.language) 
    console.log(item.languageFileName) 
})

