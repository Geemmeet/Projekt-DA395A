"use client";
import {useState, useEffect} from 'react';

//Components
import IngredientCard from '@/components/Select/IngredientCard';
import Navbar from '@/components/Homepage/Navbar';
import RefreshBtn from '@/components/Select/RefreshBtn';
import RecipeSuggestions from '@/components/Select/RecipeSuggestions';
import { FooterComponent } from '@/components/Homepage/FooterComponent';
import { useParams } from 'next/navigation';
import PreviouslyChosenIngredients from '@/components/Select/PreviouslyChosenIngredients';

//Functions 
import { searchRecipe } from '@/lib/recipeFunctionality/searchRecipe';
import { getSimilarRecipes } from '@/lib/recipeFunctionality/getSimilarRecipes';
import { getRecipeBulkInfo } from '@/lib/recipeFunctionality/getRecipeBulkInfo';
import getNextIngredientsByRecipe from '@/lib/recipeFunctionality/getNextIngredientsByRecipe';


export default function Select() {
  const params = useParams()

  //Use states
  const [ingredients, setIngredients] = useState([]);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [showingSimilarRecipes, setShowingSimilarRecipes] = useState(false);

  const handleIngredients = async () => {
    const ingredientsByRecipe = await getNextIngredientsByRecipe(chosenIngredients, params.diet)
    if (ingredientsByRecipe === null) {
      setShowingSimilarRecipes(true);
      //Check if any of the ingredients are already chosen
    } else if (ingredientsByRecipe.some((ingr) => chosenIngredients.includes(ingr))){
      //If yes, run handle ingredients again to get new ingredients
      handleIngredients()
    } else { setIngredients(ingredientsByRecipe); }
  };

  const handleChosenIngredients = (choIngr) => {
    setChosenIngredients([...chosenIngredients, choIngr]) 
  }

    const handleSearchRecipe = async () => {
      /*
      This function will search for recipes based on the chosen ingredients. 
      If there are less than 3 total results, it will fetch similar recipes based on the first recipe's ID.
      */
    
      let newRecipes = await searchRecipe(chosenIngredients, params.diet);

      if (newRecipes["totalResults"] <= 2) {
        const similarRecipes = await getSimilarRecipes(recipes[0].id, params.diet);
        const bulkInfo = await getRecipeBulkInfo(similarRecipes.map((recipe) => recipe.id));
        setRecipes(bulkInfo);
        setShowingSimilarRecipes(true);
        return;
      };

      setShowingSimilarRecipes(false);

      if (newRecipes && newRecipes["results"]) {
        setRecipes([...newRecipes["results"]]);
      }
    }

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
      }}, [chosenIngredients]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <h1 className="text-center mt-20 mb-5 text-6xl">Make your choice!</h1>
        {!showingSimilarRecipes ? (
          <div className="flex flex-col container mx-auto justify-center py-10 gap-1 lg:flex-row">
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[0]) } ingredient={ingredients[0]}/>
          <RefreshBtn onClick = { () => handleIngredients() }/>
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[1]) } ingredient={ingredients[1]} />
        </div>
        ) : (
          <div className="flex flex-col items-center gap-4 my-8">
            <p className="text-lg text-light-600 font-semibold text-center p-2">
              No more recipes were found with your chosen ingredients 😞<br/>
              Here are some similar recipes instead!
            </p>
            <button 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
        
        <PreviouslyChosenIngredients ingredients = {chosenIngredients}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <RecipeSuggestions recipes={recipes} />
      </main>
      <FooterComponent />
    </>
  );
}