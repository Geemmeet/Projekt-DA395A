import Image from "next/image";

//Component function
//import GetIngredient from "../components/GetIngredient";

//Components

import Navbar from "../components/Navbar";

import Landingpage from "../components/Homepage";
import { FooterComponent } from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Landingpage />
        </main>
        <FooterComponent />
      </div>

    </>
  );
}