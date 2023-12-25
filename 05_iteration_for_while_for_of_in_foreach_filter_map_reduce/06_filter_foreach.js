const coding = ["js","rb","py","cpp","java"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(values)

// foreach does not return any value but filter return the value.
const myNum = [1,2,3,4,5,6]
// let newNums = myNum.filter( (num) => num > 4)

//filter method
let newNums = myNum.filter( (num) => { 
    return num > 4
})
console.log(newNums)

const newNums2 = []

// foreach loop
myNum.forEach( (num) => {
    if (num >= 3){
        newNums2.push(num)
    }
})
console.log(newNums2)


const books = [
    {title: "Book-1", genre: "Friction", publish: 1981, edition: 2004},
    {title: "Book-2", genre: "Non-Friction", publish: 1988, edition: 2006},
    {title: "Book-3", genre: "Friction", publish: 1995, edition: 2009},
    {title: "Book-4", genre: "Science", publish: 1993, edition: 2004},
    {title: "Book-4", genre: "Mathmatics", publish: 1993, edition: 2004},
    {title: "Book-5", genre: "History", publish: 1991, edition: 2007},
    {title: "Book-6", genre: "Science", publish: 1993, edition: 2014},
    {title: "Book-7", genre: "History", publish: 1998, edition: 2011}
]

const userBooks = books.filter( (bk) =>  bk.genre === "History" )
let userBookPublishYear = books.filter( (bk) =>  bk.publish >= 1995 )
let userBookPublishYear1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" 
} )

let userBookPublishYear2 = books.filter( (bk) => { 
    return bk.publish >= 1995 || bk.genre === "History" 
} )

console.log(userBooks)
console.log(userBookPublishYear)
console.log(userBookPublishYear1)
console.log(userBookPublishYear2)