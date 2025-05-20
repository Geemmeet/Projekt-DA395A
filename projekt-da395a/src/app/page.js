import Image from "next/image";
import Navbar from "../components/Navbar";
import RecipeByIngredientFetcher from "../components/RecipeByIngredientFetcher";
import GetIngredient from "../components/GetIngredent";
export default function Home() {
  return (
    <div>
      <Navbar />
      <RecipeByIngredientFetcher />
      <GetIngredient />
    </div>
  );
}