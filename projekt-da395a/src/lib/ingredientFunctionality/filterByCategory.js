import { ingredients } from "../spoonacularUtils/ingredientList.js";

export function filterByCategory(cat) {
    /*
    Accepts a category string and filters the ingredients list to return only those
    of that category.

    Expected categories:
    - carb
    - meat
    - vegetable
    - dairy
    - fruit
    */
    return ingredients.filter((ingredient) => ingredient.category === cat);
}