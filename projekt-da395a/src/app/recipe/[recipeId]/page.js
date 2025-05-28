'use client'

//Import Components
import Navbar from "@/components/Navbar";
import MainCombinedTopBottom from "@/components/ShowRecipe/MainCombinedTopBottom";

import { useParams } from 'next/navigation'

export default function Recipe() {  

  //Store value of dynamic routing in recipeID variable through the use of useParams
  //https://nextjs.org/docs/app/api-reference/functions/use-params

  const param = useParams()

  return (
    <>
        <Navbar />
        <main>
            <MainCombinedTopBottom />
            <h1>{param.recipeId}</h1>
        </main>
        
    </>
  );
}