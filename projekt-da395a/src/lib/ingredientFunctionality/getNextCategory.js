const categories = [
    "carb",
    "meat",
    "vegetable",
];

export function getNextCategory(ingredients) {
    /*
    Tar emot en lista med valda ingredienser. Går igenom listan och returnerar
    första kategorin som inte redan är vald. Om listan är tom returneras "carb"
    och om alla kategorier är valda returneras "vegetable".
    */
    console.log("Chosen catIngredients: ", ingredients);
    if (!ingredients || ingredients.length === 0) {
        return "carb";
    }
    const chosenCategories = ingredients.map((ingredient) => ingredient.category);
    const next = categories.find(cat => !chosenCategories.includes(cat));
    return next || "vegetable"; // om alla kategorier är valda, returnera "vegetable"
};

