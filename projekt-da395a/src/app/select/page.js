'use client'
//Component function

//Components
import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "@/components/Navbar";
import ReloadBtn from "@/components/ReloadBtn";
import { FooterComponent } from "@/components/Footer";



export default function Select() { 
  
  
  return (
    <>
      <div> 
        <Navbar />
        <main>
          <div className="flex flex-row w-3/6 lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
          <IngredientCard text="här kanske vi kan ha ingridiens 1" />
          <ReloadBtn/>
          <IngredientCard text="ingrediens 2"/>
          </div>
        </main>
        <FooterComponent />
      </div>

    </>
  );
}