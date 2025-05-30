"use strict";
import { getRecipesByIngredients } from '@/lib/spoonacularUtils/spoonacular'

export async function searchRecipe(ingredients) {

    try {
        console.log("ingredients: ", ingredients);
        const ingrStr = ingredients.join(",");
        console.log("ingrStr: ", ingrStr);
        const response = await fetch(`/api/?type=byIngredients&ingredients=${ingrStr}`);
        const data = await response.json();
        console.log("data: ", data);
        return data;
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };