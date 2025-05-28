'use client'

//Import Components
import Navbar from "@/components/Navbar";
import MainCombinedTopBottom from "@/components/ShowRecipe/MainCombinedTopBottom";


export default function Recipe() {  
  return (
    <>
        <Navbar />
        <main>
            <MainCombinedTopBottom />
        </main>
        
    </>
  );
}