import { searchRecipe } from "./searchRecipe"
import { randomizer } from "../randomUtils/randomizer"
import { ingredientList } from "../spoonacularUtils/ingredientList";
import getRandomIngredientFromRecipe from "./getRandomIngredientFromRecipe";

export default async function getNextIngredientsByRecipe (chosenIngredients, diet) {

    if (chosenIngredients.length === 0) {
        const carbs = ingredientList.carbs

        //Get two carbs to use as primary choices
        const twoRandomCarbs = randomizer({ array: carbs, count: 2 });
        return twoRandomCarbs

    } else {
        const foundRecipes = await searchRecipe(chosenIngredients, diet)
        console.log(foundRecipes)
        console.log(foundRecipes.results.length)

        if (foundRecipes.results.length >= 3) {
            console.log("Now im here")
            const firstRecipe = foundRecipes.results[0]
            const secondRecipe = foundRecipes.results[1]

            const firstIngredient = await getRandomIngredientFromRecipe(firstRecipe)
            const secondIngredient = await getRandomIngredientFromRecipe(secondRecipe)

            return [firstIngredient, secondIngredient]

        } else {
            return null
        }
    }   
}