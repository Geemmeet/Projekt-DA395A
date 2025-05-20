import Image from "next/image";
import Navbar from "../components/navbar";
import RecipeByIngredientFetcher from "../components/recipeByIngredientFetcher";
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