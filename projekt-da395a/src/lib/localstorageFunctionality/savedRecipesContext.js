'use client';

//React Functions
import { createContext, useContext, useState, useEffect } from 'react';

//Our Functions
import { getSavedRecipes } from './getSavedRecipes';

//Creating a context in order for multiple pages to be able to use the functionality
//https://react.dev/reference/react/createContext

const SavedRecipesContext = createContext();

export function SavedRecipesProvider({ children }) {
    const [savedRecipes, setSavedRecipes] = useState([]);

    //Renders when the page is loaded
    useEffect(() => {
    setSavedRecipes(getSavedRecipes());
    }, []);

    //https://www.w3schools.com/jsref/jsref_some.asp
    //Check if the recipe is already saved
    function saveRecipe(newRecipe) {
        
        if (savedRecipes.some(recipe => recipe.recipeId === newRecipe.recipeId)) {
            
            alert('Recipe already saved!');
            return;
        }

        //Update the array of saved recipes
        const updated = [...savedRecipes, newRecipe];

        //save the updated array to useState
        setSavedRecipes(updated);

        //Save the updated array to Local Storage
        localStorage.setItem("savedRecipes", JSON.stringify(updated))

        //User Feedback
        alert('Recipe saved!');
    }

    function removeRecipe(recipeId) {
        //filter out the deleted recipe
        const updated = savedRecipes.filter(recipe => recipe.recipeId !== recipeId)

        //save the updated array to useState
        setSavedRecipes(updated);

        //Save the updated array to Local Storage
        localStorage.setItem("savedRecipes", JSON.stringify(updated))
    }

    return (
        <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe }}>
            {children}
        </SavedRecipesContext.Provider>
    );
    }

export function storageFunctionality() {
  return useContext(SavedRecipesContext);
}