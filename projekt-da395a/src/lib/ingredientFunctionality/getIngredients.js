import { ingredients } from "../spoonacularUtils/ingredientList.js";
import { randomizer } from '../randomUtils/randomizer.js';

export async function getIngredients(cat) {
    /*
    Function that accepts a category string and returns a random selection of two ingredients.
    */
    const ingredientsByCat = ingredients[cat]

    const selected = randomizer({ array: ingredientsByCat, count: 2 });
    
    return selected;
};
