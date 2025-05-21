"use client";

import Image from "next/image";

//Components
import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "../components/Navbar";
import Reload from "../components/Reloadbtn";

export default function Home() {
  return (
    <div>
      <div>
      <Navbar />
      <main>
        <h1 className="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-wrap flex-row justify-center items-center mt-10">
          <IngredientCard />
          <Reload />
          <IngredientCard />
        </div>
      </main>
    </div>
    </div>
  );
}