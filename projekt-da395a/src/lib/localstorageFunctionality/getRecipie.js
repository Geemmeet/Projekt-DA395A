export function getRecipie() {
/* Hämtar alla sparade recept från localStorage , format: 

savedRecipies [{
    id: recipeId,
    title: title 
}]


*/
	var savedRecipies = localStorage.getItem("savedRecipies");
	
	// Kontrollera om det finns några recept i localStorage
	if(savedRecipies == null) {
		// Det finns inget i localStorage, så vi skapar en tom lista där
		localStorage.setItem("savedRecipies", JSON.stringify([]));
		// Returnerar en tom lista (= inga likes)
		return [];
	} else {
		// Returnerar alla likes i en lista (från JSON => lista med objekt)
		return JSON.parse(savedRecipies);
	}
}