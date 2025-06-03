import { getRecipie } from "./getRecipie"



export function saveRecipie(recipeId, title) {
// hämta befintlig lista
// kolla om recepet id finns redan
// annars lägg till det

let recipeList = getRecipie();
console.log("Clicked:", recipeId, title)

const alreadySaved = recipeList.some((recipe) => recipe.id === recipeId)// smidig funktion för att se om ngt redan finns i arrayen: https://www.w3schools.com/jsref/jsref_some.asp
if (alreadySaved) 
    return alert("Recipe already saved!")//stannar upp här om id redan finns i listan


recipeList.push({id:recipeId, title:title});
//spara i localstorage
localStorage.setItem("savedRecipies", JSON.stringify(recipeList))
alert("Recipe saved!")
return recipeList


	
}
