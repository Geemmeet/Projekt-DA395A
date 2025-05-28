import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

export default function () {
    return (
        <>
            <div className="flex justify-evenly flex-wrap-reverse">
                <RecipeIngredients />
                <RecipeInstructions />
            </div>
        </>
        

    )
}