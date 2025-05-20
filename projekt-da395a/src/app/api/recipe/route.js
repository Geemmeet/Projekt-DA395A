import { getRecipesByIngredients } from '@/lib/spoonacular'

export async function GET(req) {
    const url = new URL(req.url, 'http://localhost');
    const type = url.searchParams.get('type');

    if (type === 'byIngredients') {
        const ingredients = url.searchParams.get('ingredients');
        const data = await getRecipesByIngredients(ingredients);
        return Response.json(data);
    }

    return new Response(JSON.stringify({ error: 'Unknown type' }), { status: 400 });
}
