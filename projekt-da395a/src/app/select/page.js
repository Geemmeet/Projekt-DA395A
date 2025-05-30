"use client";
import {useState, useEffect} from 'react';

//Components
import IngredientCard from '@/components/IngredientCard';
import Navbar from "@/components/Navbar";
import ReloadBtn from "@/components/ReloadBtn";
import RecipeSummary from '@/components/RecipeSummary/RecipeSummary';
import { FooterComponent } from "@/components/Footer";

//functions 
import { getIngredients } from "@/lib/ingredientFunctionality/getIngredients"
import { searchRecipe } from '@/lib/recipeFunctionality/searchRecipe';
import { getNextCategory } from '@/lib/ingredientFunctionality/getNextCategory';


export default function Select() {
    const [ingredients, setIngredients] = useState({});
    const [ingredientCounter, setCounter] = useState(0);
    const [chosenIngredients, setChosenIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);


    const handleIngredients = async () => {
      const cat = getNextCategory(chosenIngredients);
      const result = await getIngredients(cat);
      setIngredients(result);
      setCounter(ingredientCounter + 1);
    };

    const handleChosenIngredients = (choIngr) => {
      chosenIngredients.length > 0 ? setChosenIngredients([...chosenIngredients, choIngr]) : setChosenIngredients([choIngr]);
      console.log("Chosen ingredients: ", [...chosenIngredients, choIngr]);
    }

    const handleSearchRecipe = async () => {
      const ingrNames = chosenIngredients.map(ingr => ingr.name);
      const newRecipes = await searchRecipe(ingrNames);
      newRecipes && setRecipes([...newRecipes["results"]]);
      newRecipes && console.log("Recipes: ", [...newRecipes["results"]]);
    }


  //Kör handleIngredients en gång när sidan laddas
  useEffect(() => {
    handleIngredients();
  }, []);
  
  //Kör handleIngredients varje gång chosenIngredients ändras
  useEffect(() => {
    if (chosenIngredients.length > 0) {
    handleIngredients();
    }
  }, [chosenIngredients]);

  useEffect(() => {
    if (chosenIngredients.length > 0) {
      handleSearchRecipe();
    }
  }, [chosenIngredients]);

  return (
    <>
      <div>
      <Navbar />
      <main>
        <h1 className="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-row w-3/6 lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[0])} ingredients={ingredients[0]}/>
          <ReloadBtn onClick = { () => handleIngredients() }/>
          <IngredientCard onClick={() => handleChosenIngredients(ingredients[1])} ingredients={ingredients[1]} />
        </div>
        <RecipeSummary recipes={recipes} />
      </main>
    </div>
    </>
  );
}