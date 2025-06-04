import { ingredients } from "../spoonacularUtils/ingredientList";

const categories = [
    "carbs",
    "meats",
    "vegetables",
];

function getIngredientCategory(ingredientName) {
  const lowerName = ingredientName.toLowerCase();
  for (const category in ingredientLists) {
    if (ingredientLists[category].some(item => item.toLowerCase() === lowerName)) {
      return category;
    }
  }
  return null;
}



export function getNextCategory(userIngredients, diet) {
    /*
    Accepts an array of ingredient objects and a diet type.
    Returns the next category to be added based on the ingredients provided.
    It will always return "carb" if no ingredients are provided.
    If "vegan" or "vegetarian" diet is passed, it removes "meat" from the categories.
    If all categories are already included, it returns "vegetable".
    */
    if (diet === "vegan" || diet === "vegetarian") {
        categories.splice(1, 1);
    }
    console.log("Chosen catIngredients: ", userIngredients);
    if (!userIngredients || userIngredients.length === 0) {
        return "carbs";
    }

    for (const category in ingredients) {
    if (ingredients[category].some(item => item.toLowerCase() === lowerName)) {
      return category;
    }
  }

    const chosenCategories = ingredients.map((ingredient) => getIngredientCategory(ingredient))

    const next = categories.find(cat => !chosenCategories.includes(cat));
    return next || "vegetables"; // if all categories are chosen, return vegetables
};

