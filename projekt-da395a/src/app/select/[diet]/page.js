"use client";
import { useState, useEffect } from "react";

//Components
import IngredientCard from "@/components/Select/IngredientCard";
import Navbar from "@/components/Homepage/Navbar";
import RefreshBtn from "@/components/Select/RefreshBtn";
import RecipeSuggestions from "@/components/Select/RecipeSuggestions";
import { FooterComponent } from "@/components/Homepage/FooterComponent";
import { useParams } from "next/navigation";
import PreviouslyChosenIngredients from "@/components/Select/PreviouslyChosenIngredients";

//Functions
import { searchRecipe } from "@/lib/recipeFunctionality/searchRecipe";
import { getSimilarRecipes } from "@/lib/recipeFunctionality/getSimilarRecipes";
import { getRecipeBulkInfo } from "@/lib/recipeFunctionality/getRecipeBulkInfo";
import getNextIngredientsByRecipe from "@/lib/recipeFunctionality/getNextIngredientsByRecipe";

export default function Select() {
  const params = useParams();

  //Use states
  const [ingredients, setIngredients] = useState([]);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [showingSimilarRecipes, setShowingSimilarRecipes] = useState(false);

  //Keeps track of retries of running handleIngredients
  const MAX_RETRIES = 3;

  const handleIngredients = async (retryCount = 0) => {
    const ingredientsByRecipe = await getNextIngredientsByRecipe(
      chosenIngredients,
      params.diet
    );
    if (ingredientsByRecipe === null) {
      setShowingSimilarRecipes(true);
    } else if (
      //Check if any of the ingredients are already chosen
      ingredientsByRecipe.some((ingr) => chosenIngredients.includes(ingr))) {
        if (retryCount < MAX_RETRIES) {
        //If yes, run handle ingredients again to get new ingredients and add 1 to the retryCount. 
        handleIngredients(retryCount + 1);
      } else {
        //If retryCount is three then show similar recipes instead.
        setShowingSimilarRecipes(true);
      }
    } else {
      //If none of above is true
      setIngredients(ingredientsByRecipe);
    }
  };

  const handleChosenIngredients = (choIngr) => {
    setChosenIngredients([...chosenIngredients, choIngr]);
  };

  const handleSearchRecipe = async () => {
    /*
      This function will search for recipes based on the chosen ingredients. 
      If there are less than 3 total results, it will fetch similar recipes based on the first recipe's ID.
      */
    let newRecipes = await searchRecipe(chosenIngredients, params.diet);
    console.log("newRecipes är:", newRecipes);
    console.log("typeof:", typeof newRecipes);
    console.log("isArray:", Array.isArray(newRecipes));
    if (newRecipes) {
      setRecipes([...newRecipes]);
      setShowingSimilarRecipes(false);
    } else {
      const similarRecipes = await getSimilarRecipes(
        recipes[0].id,
        params.diet
      );
    const bulkInfo = await getRecipeBulkInfo(
        similarRecipes.map((recipe) => recipe.id)
      );
    setRecipes(bulkInfo);
    setShowingSimilarRecipes(true);
    return;
    };
  };

  //Run handleIngredients once when the page is loaded
  useEffect(() => {
    handleIngredients();
  }, []);

  //Run handleIngredients each time chosenIngredients is updated
  useEffect(() => {
    handleIngredients();
  }, [chosenIngredients]);

  //Run handleSearchRecipe when chosenIngredients changes if there are any chosen ingredients
  useEffect(() => {
    if (chosenIngredients.length > 0) {
      handleSearchRecipe();
    }
  }, [chosenIngredients]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <h2 className="londrina_solid text-center mt-20 mb-5 text-6xl">Choose your ingredients!</h2>
        {!showingSimilarRecipes ? (
          <div className="flex flex-col container mx-auto justify-center py-10 gap-1 lg:flex-row">
            <IngredientCard
              onClick={() => handleChosenIngredients(ingredients[0])}
              ingredient={ingredients[0]}
            />
            <RefreshBtn onClick={() => handleIngredients()} />
            <IngredientCard
              onClick={() => handleChosenIngredients(ingredients[1])}
              ingredient={ingredients[1]}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 my-8">
            <p className="text-lg text-light-600 font-semibold text-center p-2">
              No more recipes were found with your chosen ingredients 😞
              <br />
              Here are some similar recipes instead!
            </p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-[#DAD5F3]"
              onClick={() => {
                setChosenIngredients([]);
                setRecipes([]);
                setShowingSimilarRecipes(false);
              }}
            >
              Start Over!
            </button>
          </div>
        )}

        <PreviouslyChosenIngredients ingredients={chosenIngredients} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <RecipeSuggestions recipes={recipes} />
      </main>
      <FooterComponent />
    </>
  );
}
