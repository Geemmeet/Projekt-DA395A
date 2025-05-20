import { ingredients } from "./ingredients.js";
import { categorizeIngredients } from "./categorizeIngredients.js";
import fs from "fs";


const categorizedPool = ingredients.map((ingredient) => ({
    ...ingredient, category: categorizeIngredients(ingredient.name),
}));

fs.writeFileSync(
    "ingredientsCategorized.js",
    `export const ingredientPool = ${JSON.stringify(categorizedPool, null, 2)};`
);