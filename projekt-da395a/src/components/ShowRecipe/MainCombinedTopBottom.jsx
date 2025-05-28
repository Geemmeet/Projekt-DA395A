import RecipeBottom from "./Bottom/RecipeBottom";
import RecipeTop from "./Top/RecipeTop";
import { getRecipeInformation } from "@/lib/recipeFunctionality/getRecipeInformation";

export default function () {
    return (
        <div className="container mx-auto p-8">
            <RecipeTop onClick={getRecipeInformation(715415)}/>
            <RecipeBottom onClick={getRecipeInformation(715415)}/>
        </div>
    )
}