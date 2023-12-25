const myNums = [1,2,3]

// reduce function/method through normal function
const myTotal = myNums.reduce( function(acc, currentval) {
    console.log(`acc: ${acc} and currentval: ${currentval}`)
    return acc + currentval
},0)

console.log(myTotal)

// reduce function/method through arrow function
const myArrowTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myArrowTotal)

const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
    {
        itemName: "AI course",
        price: 3999
    }
]

const shoppingPriceAdd = shoppingCart.reduce( (acc, item) => acc + Number(item.price), 0 )
console.log(shoppingPriceAdd)
 
let element = 0
for (let i = 0; i < shoppingCart.length; i++) {
    //const element = shoppingCart[i];
    //const element = shoppingCart[i].itemName;
    element = Number(shoppingCart[i].price) + element;
}
console.log(`Total course price is ${element}`);