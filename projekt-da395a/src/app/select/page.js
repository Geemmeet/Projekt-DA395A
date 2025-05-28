"use client";
import {useState, useEffect} from 'react';

//Components
import IngredientCard from '@/components/IngredientCard';
import Navbar from "@/components/Navbar";
import ReloadBtn from "@/components/ReloadBtn";
import RecipeList from '@/components/RecipeList';

//functions 
import { getIngredients } from "@/lib/randomUtils/getIngredients"
import { searchRecipe } from '@/lib/spoonacularUtils/searchRecipe';


export default function Select() {

    const [ingredients, setIngredients] = useState([]);
    const [chosenIngredients, setChosenIngredients] = useState([]);



    const handleIngredients = async () => {
      const result = await getIngredients();
      console.log(result);
      setIngredients(result);
    };

    const handleChosenIngredients = (choIngr) => {
      setChosenIngredients([...chosenIngredients, choIngr]);
      handleIngredients();
    }
  //Kör handleIngredients en gång när sidan laddas
  useEffect(() => {
    handleIngredients();
  }, []);

  return (
    <>
      <div>
      <Navbar />
      <main>
        <h1 className="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-row w-3/6 lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[0].name)} ingredients={ingredients[0]}/>
          <ReloadBtn />
          <IngredientCard onClick={ () => handleChosenIngredients(ingredients[1].name)} ingredients={ingredients[1]} />
            <button onClick={() => searchRecipe("potato")}>testa searchRecipe</button>
        </div>
        <RecipeList chosenIngredients={chosenIngredients} />
      </main>
    </div>
    </>
  );
}