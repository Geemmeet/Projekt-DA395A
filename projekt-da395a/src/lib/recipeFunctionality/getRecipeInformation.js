
export async function getRecipeInformation (id) {
    try {
        const response = await fetch(`/api/?type=recipeInfo&id=${id}`);
        const data = await response.json();
        return data;
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };