import { ingredients } from "../spoonacularUtils/ingredientList";

export default function getCatByIngredient(ingredientName) {
    //Function to check which category an ingredient belongs to

    for (const category in ingredients) {
        if (ingredients[category].some(item => item === ingredientName)) {
            return category;
        }
    }
}