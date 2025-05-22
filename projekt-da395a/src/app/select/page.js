'use client'
//Component function

//Components
import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "@/components/Navbar";
import Reload from "@/components/Reloadbtn";

import { FooterComponent } from "@/components/Footer";

export default function SelectPage() {
  return (
    <>
      <div> 
        <Navbar />
        <main>
          <div className="flex flex-row w-3/6 lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
          <IngredientCard text="testar proppen" />
          <Reload/>
          <IngredientCard text="testar den andra proppen"/>
          </div>
        </main>
        <FooterComponent />
      </div>

    </>
  );
}