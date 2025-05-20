const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function getRecipesByIngredients(ingredients) {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${ingredients}&number=3&apiKey=${apiKey}`);
    return await response.json();
}