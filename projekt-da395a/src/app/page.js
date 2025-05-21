import Image from "next/image";

//Component function
//import GetIngredient from "../components/GetIngredient";

//Components
//import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "../components/Navbar";
//import Reload from "../components/Reloadbtn";
import Landingpage from "../components/Homepage/Homepage";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <div className="flex flex-wrap flex-row justify-center items-center mt-10">
            <Landingpage />

          </div>
        </main>
      </div>

    </>
  );
}