const { tryToCook, meals } = require(./functions.js)



// 1.Add new found ingredients to the materials array (line 3) /!
// 2. make recipes as objects
/*recipes[
    {id: 1, mealName: name, ingredients:[]}
    {another object}
]
  
// 3. modify cook function to take any number of parameters
cook(array)








const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat',
 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar',
 'Raw Bird Thigh', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']

const possibleMeals = ['Cheesy Omlette'{
    constituents: materials[1,2]
}


]



list out the meals you can cook 
final: Take users input as to what meal they want then output the ingredients 




*/
const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']
// add meals to meals array with .push()
const meals = []
const recipes {
    riceballs:ing[1], ing2[1],
}

// create recipes object and have the key like meal[0] and value as ing[1], ing[2]

/*

    for (eachRecipe of recipes){
        (if ingredients = eachRecipe.ingredients){
            push.(meals)
        }
    }
    
*/

recipes.riceballs[0]

const cook = (firstIngredient, secondIngredient) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Radish') {
        meals.push('Mushroom Rice Balls')
    }
}

cook(materials[1], materials[0])

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meals)
}



//- What should the parameter(s) for the cook function be to account for any number of ingredients?
//- How do we pass in the specific ingredients to the function?
//- How can we check for the specific ingredients?

// create function meals to check ingredients.length & ingredients index 
    // if ing1[0-hateno cheese] && ing2[1-bird egg] && ing3[]  are both there 
        // return recipes.cheesyOmlette 


// use if statements to check if ingredients === meal 

