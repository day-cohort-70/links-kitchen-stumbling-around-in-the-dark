const { materials, recipes, meals } = require("./dataBase.js")


function tryToCook(ingredients){
    // check each recipe for of
    for (const meal of recipes){

        // boolean for if it's the right recipe
        let stillRightMeal = true
        
        // Check if it's the right amount of ingredients
        if (meal.ingredients.length == ingredients.length){

            // check to see if recipe has each ingredient
            for (let i = 0; i < meal.ingredients.length; i++){
                if (!meal.ingredients.includes(ingredients[i]))
                    stillRightMeal = false;
            }
            if (stillRightMeal === true){
                meals.push(meal.mealName)    
                return  meal.mealName // 11:55aM - fIRST SUCCESSFUL OUTPUT 
            } 
            }
                    
    } 
    console.log("Burned your food! OOF!")
}

//console.log(tryToCook(['Hylian Rice', 'Big Hearty Truffle']))


module.exports = { tryToCook, meals}
