
const { materials, recipes } = require("./dataBase.js")

const meals = []

/*const cook = (firstIngredient, secondIngredient) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Radish') {
       
       
        meals.push('Mushroom Rice Balls')  // Adds new meal to links backpack aka meals array
    }
}*/

function cook(ingredientsArray){

}


//cook(materials[1], materials[0])

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meals)
}



//- What should the parameter(s) for the cook function be to account for any number of ingredients?
//- How do we pass in the specific ingredients to the function?
//- How can we check for the specific ingredients?