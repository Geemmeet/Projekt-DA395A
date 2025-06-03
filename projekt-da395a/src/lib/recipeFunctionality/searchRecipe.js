"use strict";

export async function searchRecipe(ingredients, diet) {

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