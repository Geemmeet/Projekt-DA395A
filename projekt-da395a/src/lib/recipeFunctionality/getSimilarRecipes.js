export async function getSimilarRecipes(id, diet) {
/*
Function that accepts a recipe ID and diet type as parameters. Searches for similar recipes based on the 
ID and diet type provided. Returns an array of similar recipes.
*/
    try {
        const response = await fetch(`/api/?type=similarRecipes&id=${id}&diet=${diet}`);
        const data = await response.json();
        console.log("data: ", data);
        return data;
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };