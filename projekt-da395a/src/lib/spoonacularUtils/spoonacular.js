const apiKey = process.env.NEXT_PUBLIC_API_KEY;
/*
Här samlar vi de olika anropen till Spoonacular som vi använder i route.js. 
*/

export async function getRecipesByIngredients(ingredients, diet) {
    /*
    Hämtar recept baserade på den/de ingredienser vi skickar med.
    */
    //const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${ingredients}&number=3&apiKey=${apiKey}`);
    console.log("ingredients: ", ingredients);
    const params = new URLSearchParams({
        includeIngredients: ingredients,
        number: 3,
        instructionsRequired: true,
        apiKey: apiKey,
        addRecipeInformation: true,
        addRecipeInstructions: true,
        diet: diet
    });
    const url = `https://api.spoonacular.com/recipes/complexSearch?${params}`;
    const response = await fetch(url);
    
    return await response.json();
}


export async function getSimilarRecipes(id, diet) {
    const params = new URLSearchParams({
        number: 3,
        apiKey: apiKey,
        diet: diet
    });
    const url = `https://api.spoonacular.com/recipes/${id}/similar?${params}`;
    const response = await fetch(url);

    return await response.json();
}

export async function getRecipeInfoBulk(ids) {
    const params = new URLSearchParams({
        ids: ids.join(','),
        apiKey: apiKey
    });

    const url = `https://api.spoonacular.com/recipes/informationBulk?${params}`;
    const response = await fetch(url);

    return await response.json();
}

export async function getIngredient(id) {
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&apiKey=${apiKey}`);
    return await response.json();
}