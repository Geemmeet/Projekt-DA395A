"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";

//Components
import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "../components/Navbar";
import Reload from "../components/ReloadBtn";
import { getIngredients } from "../lib/randomUtils/getIngredients"

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
    <div>
      <div>
      <Navbar />
      <main>
        <h1 className="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-wrap flex-row justify-center items-center mt-10">
          <IngredientCard onClick={() => handleChosenIngredients(ingredients[0])} ingredients={ingredients[0]}/>
          <Reload />
          <IngredientCard onClick={() => handleChosenIngredients(ingredients[1])} ingredients={ingredients[1]} />
        </div>
        <ul>
          {chosenIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </main>
    </div>
    </div>
  );
}