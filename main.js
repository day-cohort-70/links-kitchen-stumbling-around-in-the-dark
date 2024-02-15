
const { materials, recipes,} = require("./dataBase.js")
const { tryToCook, meals } = require("./functions.js")




tryToCook (['Hylian Rice', 'Raw Prime Meat'])
tryToCook (['Tabantha Wheat', 'Bird Egg'])
tryToCook (["Tabantha Wheat", 'Bird Egg', 'Goat Butter', 'Cane Sugar'])


console.log("MEALS:")
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}



//- What should the parameter(s) for the cook function be to account for any number of ingredients?
//- How do we pass in the specific ingredients to the function? 
//- How can we check for the specific ingredients?

