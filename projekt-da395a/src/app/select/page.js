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
          <div className="flex flex-row lg:flex-row  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-row-reverse">
          <IngredientCard />
          <Reload/>
          <IngredientCard />
          </div>
        </main>
        <FooterComponent />
      </div>

    </>
  );
}