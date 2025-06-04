import { getRecipeInformation } from "./getRecipeInformation"

export default async function getRandomIngredientFromRecipe(recipe) {
    const recipeInformation = await getRecipeInformation(recipe.id)

    //Get the length of the ingredientslist for a specific recipe
    const numberOfIngredients = recipeInformation.extendedIngredients.length

    //Chose a random index from the range decided by the number of ingredients
    let randomIndex = Math.floor(Math.random() * numberOfIngredients);

    //Pick the ingredient on that index and then return it
    const ingredient = recipeInformation.extendedIngredients[randomIndex].name

    return ingredient
}