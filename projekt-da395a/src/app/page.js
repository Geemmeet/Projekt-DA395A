"use client";
import {useState, useEffect} from 'react';
import { IngredientCard } from '@/components/IngredientCard';

//Components

import Navbar from "../components/Navbar";
import ReloadBtn from "../components/ReloadBtn";
import { getIngredients } from "../lib/randomUtils/getIngredients"
import RecipeList from '@/components/RecipeList';

export default function Home() {

    const [ingredients, setIngredients] = useState([]);
    const [chosenIngredients, setChosenIngredients] = useState([]);



    const handleIngredients = async () => {
      const result = await getIngredients();
      console.log(result);
      setIngredients(result);
    };

    const handleChosenIngredients = (choIngr) => {
      console.log(choIngr.name);
      setChosenIngredients([...chosenIngredients, choIngr.name]);
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
        <div className="flex flex-wrap flex-row justify-center items-center mt-10">
          <IngredientCard onClick={handleChosenIngredients} ingredients={ingredients[0]}/>
          <ReloadBtn />
          <IngredientCard onClick={handleChosenIngredients} ingredients={ingredients[1]} />
        </div>
        <RecipeList chosenIngredients={chosenIngredients} />
      </main>
    </div>
    </>
  );
}