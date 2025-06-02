//Component function
//import GetIngredient from "../components/GetIngredient";

//Components
import Navbar from "@/components/Homepage/Navbar";
import Homepage from "@/components/Homepage/Homepage";
import { FooterComponent } from "@/components/Homepage/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Homepage />
        </main>
        <FooterComponent />
      </div>

    </>
  );
}