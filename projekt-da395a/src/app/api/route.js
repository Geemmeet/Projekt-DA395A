import { getRecipesByIngredients, getIngredient } from '@/lib/spoonacularUtils/spoonacular'
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
        const data = await getRecipesByIngredients(ingredients, diet);
        return Response.json(data);
    }
    
    if (type === 'ingrID') {
        const id = url.searchParams.get('id');
        const data = await getIngredient(id);
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