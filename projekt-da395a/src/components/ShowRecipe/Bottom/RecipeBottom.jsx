import RecipeIngredients from "./RecipeIngredients";
import ReceipeInstructions from "./RecipeInstructions";

export default function () {
    return (
        <>
            <div className="flex justify-evenly flex-wrap-reverse">
                <RecipeIngredients />
                <ReceipeInstructions />
            </div>
        </>
        

    )
}