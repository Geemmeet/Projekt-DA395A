export async function searchRecipe(ingredients) {

    try {
        const responses = await fetch(`/api/recipe?type=byIngredients&ingredients=potato`);
        responses.map((response) => console.log(response.json()));
        return responses.json();
        
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };