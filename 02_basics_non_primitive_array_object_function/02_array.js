const marvel_heros = ["thor","Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// push method
//marvel_heros.push(dc_heros)
// console.log(marvel_heros)  // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]


console.log(marvel_heros)
console.log(marvel_heros[3])
//console.log(marvel_heros[3][0])

// concat method
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

 
// Spread operator
const all_new_Heros = [...marvel_heros,...dc_heros]
console.log(all_new_Heros)


// flat method => spread the multi dimentional array into 1 dimentional array
const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,2]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

 
// isArray method to check that particular thing is array or not.
console.log(Array.isArray(another_array))
console.log(Array.isArray(all_new_Heros))
console.log(Array.isArray("Nishant"))

// from metjod
console.log(Array.from("Nishant"))
console.log(Array.from({Name: "Nishant"}))  // interesting


let score1 = 100
let score2 = 200
let score3 = 300

// of method to convert set of elements into array.
console.log(Array.of(score1, score2, score3))

