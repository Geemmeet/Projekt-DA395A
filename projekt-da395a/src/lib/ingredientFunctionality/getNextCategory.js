import getCatByIngredient from "./getCatByIngredient";

const categories = [
    "carbs",
    "meats",
    "vegetables",
];

export function getNextCategory(Ingredients, diet) {
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
    console.log("Chosen catIngredients: ", Ingredients);
    if (!Ingredients || Ingredients.length === 0) {
        return "carbs";
    }

    const chosenCategories = Ingredients.map((ingredient) => getCatByIngredient(ingredient))

    const next = categories.find(cat => !chosenCategories.includes(cat));
    return next || "vegetables"; // if all categories are chosen, return vegetables
};

