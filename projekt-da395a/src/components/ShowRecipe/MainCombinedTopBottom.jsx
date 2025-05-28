import RecipeBottom from "./Bottom/RecipeBottom";
import RecipeTop from "./Top/RecipeTop";
import { getRecipeInformation } from "@/lib/recipeFunctionality/getRecipeInformation";

export default function () {
    return (
        <>
            <RecipeTop onClick={getRecipeInformation(715415)}/>
            <RecipeBottom onClick={getRecipeInformation(715415)}/>
        </>
    )
}