import { useState } from "react";
import { ingredients } from "./ingredientsCategorized.js";

export function filterByCategory(cat) {
    return ingredients.filter((ingredient) => ingredient.category === cat);
}

console.log(filterByCategory('protein'));