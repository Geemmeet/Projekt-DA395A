export async function getRecipeBulkInfo(ids) {
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