"use client";
import {useState, useEffect} from 'react';
import { IngredientCard } from '@/components/IngredientCard';

//Components

import Navbar from "@/components/Navbar";
import ReloadBtn from "@/components/ReloadBtn";
import { getIngredients } from "@/lib/randomUtils/getIngredients"
import RecipeList from '@/components/RecipeList';

export default function Select() {

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
        <div className="flex flex-row w-3/6 lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
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