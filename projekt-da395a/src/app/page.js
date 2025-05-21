import Image from "next/image";

//Component function
//import GetIngredient from "../components/GetIngredient";

//Components
//import { IngredientCard } from "@/components/IngredientCard";
import Navbar from "../components/Navbar";
//import Reload from "../components/Reloadbtn";
import Landingpage from "../components/Homepage";
import {FooterComponent} from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          
            <Landingpage />

            <FooterComponent />
        </main>
      </div>

    </>
  );
}