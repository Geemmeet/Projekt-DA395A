export async function getRecipe(id) {
    const url = new URL(req.url, 'http://localhost/getRecipe');
    const type = url.searchParams.get('type');

    if (type === 'byIngredients') {
        const ingredients = url.searchParams.get('ingredients');
        const data = await getRecipesByIngredients(ingredients);
        return Response.json(data);
    }
    
    if (type === 'ingrID') {
        const id = url.searchParams.get('id');
        const data = await getIngredient(id);
        return Response.json(data);
    }

    return new Response(JSON.stringify({ error: 'Unknown type' }), { status: 400 });
}