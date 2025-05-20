import { ingredients } from "./ingredientsCategorized.js"
/*
Funktion för att hålla reda på hur många av varje kategori vi har i ingrediens-listan.
vi kör .reduce-funktionen på Ingredients, där acc (tomt objekt) är vår accumulator där resultatet samlas, 
och ingredient representerar varje rad i ingrediens vi loopar igenom.
category är värdet av ingredient.category, om där inte finns något värde ger vi den "unknown".
Vi ger acc[category] defaultvärde 0, och sedan + 1 varje gång den hittas i listan.
*/
function countCategories(ingredients) {
    return ingredients.reduce((acc, ingredient) => {
        const category = ingredient.category || "unknown";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
}

console.log(countCategories(ingredients));