export async function getRecipeBulkInfo(ids) {
    /*
    Function that accepts an array of recipe IDs and fetches detailed information about each recipe.
    */
    console.log("ids: ", ids);
    try {
        const response = await fetch(`/api/?type=recipeBulkInfo&ids=${ids.join(',')}`);
        const data = await response.json();
        return data;
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };