const apiKey = process.env.NEXT_PUBLIC_API_KEY;
/*
Here we handle API calls to Spoonacular. These are exported to /app/api/route.js.
*/

export async function fetchRecipesByIngredients(ingredients, diet) {
    /*
    Fetches 3 recipes based on the ingredients and diet type provided, with detailed information and instructions.'
    Parameters:
    - ingredients: A string of comma-separated ingredients to search for.
    - diet: A string representing the diet type (e.g., "vegetarian", "vegan", etc.).
    Returns: 
    - A JSON object containing the search results from the Spoonacular API.
    */

    const params = new URLSearchParams({
        includeIngredients: ingredients,
        number: 10,
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


export async function fetchSimilarRecipes(id, diet) {
    /*
    Fetches similar recipes based on a given recipe ID and diet type.
    Parameters:
    - id: The ID of the recipe to find similar recipes for.
    - diet: A string representing the diet type (e.g., "vegetarian", "vegan", etc.).
    Returns:
    - A JSON object containing similar recipes from the Spoonacular API.
    */
    const params = new URLSearchParams({
        number: 3,
        apiKey: apiKey,
        diet: diet
    });
    const url = `https://api.spoonacular.com/recipes/${id}/similar?${params}`;
    const response = await fetch(url);

    return await response.json();
}

export async function fetchRecipeBulkInfo(ids) {
    /*
    Fetches detailed information about multiple recipes base on their IDs.
    Parameters:
    - ids: A comma-separated string of recipe IDs to fetch information for.
    Returns:
    - A JSON object containing detailed information about the specified recipes from the Spoonacular API.
    */
    const params = new URLSearchParams({
        ids: ids,
        apiKey: apiKey
    });

    const url = `https://api.spoonacular.com/recipes/informationBulk?${params}`;
    const response = await fetch(url);

    return await response.json();
}

export async function fetchRecipeInfo(id) {

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    
    const response = await fetch(url);
    if (!response.ok) {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error(`API returned status ${response.status}`);
    }

    return await response.json();
    
        
}