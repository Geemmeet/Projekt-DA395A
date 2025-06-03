const categories = [
    "carb",
    "meat",
    "vegetable",
];

export function getNextCategory(ingredients, diet) {
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
    console.log("Chosen catIngredients: ", ingredients);
    if (!ingredients || ingredients.length === 0) {
        return "carb";
    }
    const chosenCategories = ingredients.map((ingredient) => ingredient.category);
    const next = categories.find(cat => !chosenCategories.includes(cat));
    return next || "vegetable"; // om alla kategorier är valda, returnera "vegetable"
};

