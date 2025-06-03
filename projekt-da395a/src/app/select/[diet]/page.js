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
import { getIngredients } from "@/lib/ingredientFunctionality/getIngredients"
import { searchRecipe } from '@/lib/recipeFunctionality/searchRecipe';
import { getNextCategory } from '@/lib/ingredientFunctionality/getNextCategory';
import { getSimilarRecipes } from '@/lib/recipeFunctionality/getSimilarRecipes';
import { getRecipeBulkInfo } from '@/lib/recipeFunctionality/getRecipeBulkInfo';


export default function Select() {
  const params = useParams()
  //Use states
  const [ingredients, setIngredients] = useState({});
  const [ingredientCounter, setCounter] = useState(0);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleIngredients = async () => {
    const cat = getNextCategory(chosenIngredients, params.diet);
    const result = await getIngredients(cat);
    setIngredients(result);
    setCounter(ingredientCounter + 1);
  };

  const handleChosenIngredients = (choIngr) => {
    chosenIngredients.length > 0 ? setChosenIngredients([...chosenIngredients, choIngr]) : setChosenIngredients([choIngr]);
    console.log("Chosen ingredients: ", [...chosenIngredients, choIngr]);
  }

    const handleSearchRecipe = async () => {
      /*
      This function will search for recipes based on the chosen ingredients. 
      If there are less than 3 total results, it will fetch similar recipes based on the first recipe's ID.
      */
      const ingrNames = chosenIngredients.map(ingr => ingr.name);

      let newRecipes = await searchRecipe(ingrNames, params.diet);

      if (newRecipes["totalResults"] <= 2) {
        const similarRecipes = await getSimilarRecipes(recipes[0].id, params.diet);
        console.log("Similar recipes: ", similarRecipes);
        const bulkInfo = await getRecipeBulkInfo(similarRecipes.map((recipe) => recipe.id));
        setRecipes(bulkInfo);
        console.log("Bulk info: ", bulkInfo);
        return;
      };
      if (newRecipes && newRecipes["results"]) {
        setRecipes([...newRecipes["results"]]);
        console.log("Recipes: ", newRecipes["results"]);
      }
    }

  //Run handleIngredients once when the page is loaded
  useEffect(() => {
    handleIngredients();
  }, []);
  
  //Run handleIngredients each time chosenIngredients is updated
  useEffect(() => {
    if (chosenIngredients.length > 0) {
      handleIngredients();
      }}, [chosenIngredients]);

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
        <div className="flex flex-col container mx-auto justify-center py-10 gap-1 lg:flex-row">
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[0])} ingredients={ingredients[0]}/>
          <RefreshBtn onClick = { () => handleIngredients() }/>
          <IngredientCard onClick={() => handleChosenIngredients(ingredients[1])} ingredients={ingredients[1]} />
        </div>
        <PreviouslyChosenIngredients ingredients = {chosenIngredients}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <RecipeSuggestions recipes={recipes} />
      </main>
      <FooterComponent />
    </>
  );
}