//Load API key
const apiKey = process.env.API_KEY;

export function getRecipeInformation ({id}) {
    
    console.log(apiKey)

    fetch(`https://api.spoonacular.com/recipes/${id}/information&apiKey=${apiKey}`).then(response => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error('API call failed'); 
    }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}