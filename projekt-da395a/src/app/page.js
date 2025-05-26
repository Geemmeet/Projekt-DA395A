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
  
    const handleIngredients = async () => {
      const result = await getIngredients();
      console.log(result);
      setIngredients(result);
    };
    
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
          <IngredientCard onClick={handleIngredients} ingredients={ingredients[0]}/>
          <Reload />
          <IngredientCard onClick={handleIngredients} ingredients={ingredients[1]} />
        </div>
      </main>
    </div>
    </div>
  );
}