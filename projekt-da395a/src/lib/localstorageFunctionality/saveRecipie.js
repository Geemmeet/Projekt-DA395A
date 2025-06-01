import { getRecipie } from "./getRecipie"



export function saveRecipie(recipieId, title) {
// hämta befintlig lista
// kolla om recepet id finns redan
// anars lägg till det
let recipeList = getRecipie();

const alreadySaved = recipeList.some((recipe) => recipe.id === recipieId)// smidig funktion för att se om ngt redan finns i arrayen: https://www.w3schools.com/jsref/jsref_some.asp
if (alreadySaved) return //stannar upp här om id redan finns i listan

recipeList.push({id:recipieId, title:title});
//spara i localstorage
localStorage.setItem("savedRecipies", JSON.stringify(recipeList))


	
}
