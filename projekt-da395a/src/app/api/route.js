import { fetchRecipesByIngredients, fetchIngredient, fetchSimilarRecipes, fetchRecipeBulkInfo } from '@/lib/spoonacularUtils/spoonacular'
/*
Här sköter vi API-anropen till Spoonacular. Vi importerar de specifika anropen från /lib/spoonacular.
Baserat på vilken ?type vi skicker med från komponenten, körs respektive anrop. 
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

/*
export async function GetRecipe(id) {
    const url = new URL(req.url, 'http://localhost');

    const data = await getRecipesById(id)
    
}
*/