"use strict";

export async function searchRecipe(ingredients, diet) {
    /*
    Accepts a list of ingredients and a diet type as parameters. Searches for recipes that can
    be made with the ingredients provided and the specified diet type. Returns an array of recipes.
    Parameters:
    - ingredients: An array of strings representing the ingredients to search for.
    - diet: A string representing the diet type (e.g., "vegetarian", "vegan", etc.).
    Returns:
    - An array of recipe objects that match the search criteria.
    */
    try {
        console.log("ingredients: ", ingredients);
        const ingrStr = ingredients.join(",");
        console.log("ingrStr: ", ingrStr);
        const response = await fetch(`/api/?type=byIngredients&ingredients=${ingrStr}&diet=${diet}`);
        const data = await response.json();
        console.log("data: ", data);
        return data;
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };