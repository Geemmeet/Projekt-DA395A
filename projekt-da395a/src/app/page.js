import Image from "next/image";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div>
      <div>
      <Navbar />
      <main>
        <h1 className="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-wrap flex-row justify-center items-center mt-10">
          <Card />
        <Reload />
          <Card />
        </div>
      </main>
    </div>
      <RecipeByIngredientFetcher />
      <GetIngredient />
    </div>
  );
}