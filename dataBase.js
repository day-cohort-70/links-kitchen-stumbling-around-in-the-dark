// IT'S ALIVE

const meals = []

const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat',
 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar',
 'Raw Bird Thigh', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']   // DONE DO NOT MODIFY



// This is where we all failed at identifying a missing "=" RIP 3min 
 
const recipes = [
    {id: 1, mealName: "Egg Pudding", ingredients: ["Bird Egg", "Fresh Milk", "Cane Sugar"]},
    {id: 2, mealName: "Egg Tart", ingredients: ["Tabantha Wheat", 'Bird Egg', 'Goat Butter', 'Cane Sugar']},
    {id: 3, mealName: "Chicken Egg Fried Rice", ingredients: ['Hylian Rice', 'Raw Prime Meat', 'Bird Egg']},
    {id: 4, mealName: "Poultry Pilaf", ingredients: ['Hylian Rice', 'Bird Egg', 'Goat Butter', 'Raw Bird Thigh']},  // see if -1 will call last item in array
    {id: 5, mealName: "Prime Meat and Rice", ingredients: ['Hylian Rice', 'Raw Prime Meat']},
    {id: 6, mealName: "Cheesy Hylian Pizza", ingredients: ['Tabantha Wheat', 'Bird Egg']},
    {id: 7, mealName: "Cheesy Omlette", ingredients: ['Hateno Cheese', 'Bird Egg']},
    {id: 8, mealName: "Mushroom Rice Balls", ingredients: ['Hylian Rice', 'Big Hearty Truffle']}
]
//-----------------------------------------------------------------------------------
    
/*const recipes = [
        {id: 1, mealName: "Egg Pudding", ingredients: materials[5, 7, 8]},
        {id: 2, mealName: "Egg Tart", ingredients: materials[2, 5, 6, 8]},
        {id: 3, mealName: "Chicken Egg Fried Rice", ingredients: materials[0, 3, 5]},
        {id: 4, mealName: "Poultry Pilaf", ingredients: materials[0, 5, 6, -1]},  // see if -1 will call last item in array
        {id: 5, mealName: "Prime Meat and Rice", ingredients: materials[0, 3]},
        {id: 6, mealName: "Cheesy Hylian Pizza", ingredients: materials[2, 5]},
        {id: 7, mealName: "Cheesy Omlette", ingredients: materials[4, 5]},
        {id: 8, mealName: "Mushroom Rice Balls", ingredients: materials[0, 1]}
]*/

module.exports = {materials, recipes, meals}
