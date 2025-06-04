export function getSavedRecipes() {
/* Get saved recipes from localstorage , format: 

savedRecipes [{
    id: recipeId,
    title: title 
	}]

*/	
	const savedRecipes = localStorage.getItem("savedRecipes");
	
	//if there is recipes stored in local storage return SavedRecipes as a list of objects (from JSON)
	//else return []
	return savedRecipes ? JSON.parse(savedRecipes) : [];	
}