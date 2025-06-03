export async function getSimilarRecipes(id, diet) {

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