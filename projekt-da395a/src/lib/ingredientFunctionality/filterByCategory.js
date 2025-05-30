import { ingredients } from "../spoonacularUtils/nyIngredientsCategorized.js";

export function filterByCategory(cat) {
    /*
    tar emot en kategori som parameter, använder sedan .filter()-funktionen för att
    returnera en lista innehållande endast ingredienser av given kategori.
    */
    return ingredients.filter((ingredient) => ingredient.category === cat);
}