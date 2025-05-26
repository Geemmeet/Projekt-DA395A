export async function searchRecipe(ingredients) {


    try {
        const responses = await fetch(`/api/recipe?type=byIngredients&ingredients=${ingredients.map((ingredients, index))}`)
        console.log(responses);
        return responses;
        
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };