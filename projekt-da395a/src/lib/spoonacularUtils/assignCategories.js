import { ingredients } from "./ingredients.js";
import { categorizeIngredients } from "./categorizeIngredients.js";
import fs from "fs";

/*
Loopar igenom listan med ingredients. Kör funktionen categorizeIngredients() som 
kategoriserar ingredienserna baserat på keywords. Returnerar sedan rätt kategori som värde till category.
Om ingen kategori passar, returneras null.
*/
const categorizedPool = ingredients.map((ingredient) => ({
    ...ingredient, category: categorizeIngredients(ingredient.name),
}));

fs.writeFileSync( //tar värdet av variabeln categorizedPool och skriver det till filen ingredientsCategorized.js
    "ingredientsCategorized.js",
    `export const ingredientPool = ${JSON.stringify(categorizedPool, null, 2)};`
);