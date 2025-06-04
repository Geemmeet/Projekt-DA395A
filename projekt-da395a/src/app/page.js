//Components
import Navbar from "@/components/Homepage/Navbar";
import Homepage from "@/components/Homepage/Homepage";
import { FooterComponent } from "@/components/Homepage/FooterComponent";

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <main>
          <Homepage />
        </main>
        <FooterComponent />
      </div>
    </>
  );
}