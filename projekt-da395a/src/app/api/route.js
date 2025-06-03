import { fetchRecipesByIngredients, fetchIngredient, fetchSimilarRecipes, fetchRecipeBulkInfo } from '@/lib/spoonacularUtils/spoonacular'
/*
This is the API route for handling various recipe-related requests.
It supports fetching recipes by ingredients, ingredient details, similar recipes, and bulk recipe information.
To use this API, you need to provide the appropriate query parameters in the request URL.

Query parameters include:
    - `type`: Specifies the type of request (e.g., 'byIngredients', 'ingrID', 'similarRecipes', 'recipeBulkInfo').

Each type requires different parameters:
    - `byIngredients`: Requires `ingredients` (a comma-separated list of ingredients) and `diet` (optional).
    - `ingrID`: Requires `id` (the ID of the ingredient).
    // - `similarRecipes`: Requires `id` (the ID of the recipe) and `diet` (optional).
    - `recipeBulkInfo`: Requires `ids` (a comma-separated list of recipe IDs).
 */
export async function GET(req) {
    const url = new URL(req.url, 'http://localhost');
    const type = url.searchParams.get('type');

    if (type === 'byIngredients') {
        const ingredients = url.searchParams.get('ingredients');
        const diet = url.searchParams.get('diet');
        const data = await fetchRecipesByIngredients(ingredients, diet);
        return Response.json(data);
    }
    
    if (type === 'ingrID') {
        const id = url.searchParams.get('id');
        const data = await fetchIngredient(id);
        return Response.json(data);
    }

    if (type === 'similarRecipes') {
        const id = url.searchParams.get('id');
        const diet = url.searchParams.get('diet');
        const data = await fetchSimilarRecipes(id, diet);
        return Response.json(data);
    }

    if (type === 'recipeBulkInfo') {
        const ids = url.searchParams.get('ids');
        const data = await fetchRecipeBulkInfo(ids);
        return Response.json(data);
    }
    return new Response(JSON.stringify({ error: 'Unknown type' }), { status: 400 });
}
