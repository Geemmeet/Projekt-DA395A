import Image from "next/image";
import Navbar from "../components/navbar";
import RecipeByIngredientFetcher from "../components/recipeByIngredientFetcher";
export default function Home() {
  return (
    <div>
      <Navbar />
      <RecipeByIngredientFetcher />
    </div>
  );
}