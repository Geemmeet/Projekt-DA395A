'use client'

//Import Components
import Navbar from "@/components/BavBar";
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
            <MainCombinedTopBottom recipeId = {param.recipeId}/>
        </main>
        
    </>
  );
}