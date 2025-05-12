export async function GET(req) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const apiKey = process.env.API_KEY;

    const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?${apiKey}&ingredients=${searchParams}&number=3`
    )
}