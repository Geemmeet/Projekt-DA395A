//Component function
//import GetIngredient from "../components/GetIngredient";

//Components
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import { FooterComponent } from "../components/Footer";

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